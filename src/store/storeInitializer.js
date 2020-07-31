import store from "./store";
const config = require('../../config.json');

export async function initializeStore() {
    // Information about the pages

    // Get all pages and extract data
    try {
        await processPages(require.context('../../public/erkende-standaard'), 'erkende-standaard');
    } catch (e) {
        //store.commit('setAcknowledgedStandardsError', true);
        console.error(e);
    }

    try {
        await processPages(require.context('../../public/kandidaat-standaard'), 'kandidaat-standaard');
    } catch (e) {
        //store.commit('setCandidateStandardsError', true);
        console.error(e);
    }

    try {
        await processPages(require.context('../../public/standaard-in-ontwikkeling'), 'standaard-in-ontwikkeling');
    } catch (e) {
        //store.commit('setStandardsInDevelopmentError', true);
        console.error(e);
    }

    // Information about the statistics
    processStatistics();

    // Store was initialized at this moment
    store.commit('setStoreInitialized', true);
}

function processStatistics(){
    store.dispatch('loadStatistics');
}


async function processPages(pages, status) {
    if (pages) {
        let pageInformation = [];
        for (let page of pages.keys()) {
            const filePath = config.baseURL + '/' + status + page.substring(1, page.length);
            const info = await processPage(filePath);
            info.path = page.substring(2, page.length);
            pageInformation.push(info);
        }

        store.dispatch('loadStandards', {standards: pageInformation, type: status});
    }
}

function processPage(filePath) {
    return fetch(filePath).then(res => res.text()).then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');


        let information = {};

        const titles = doc.getElementsByTagName('h1');
        for (let i = 0; i < titles.length; i++) {
            const prop = titles[i].getAttribute('itemprop');
            if (prop && prop === 'title') {
                information['title'] = titles[i].innerHTML;
            }
        }

        const divs = doc.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
            const prop = divs[i].getAttribute('itemprop');
            if (prop && prop != 'mainContentOfPage') {

                const content = divs[i].innerHTML;
                if (prop === 'publisher') {
                    const hrefs = divs[i].getElementsByTagName('a');
                    information.organisation = hrefs[0].text;
                    information.organisationID = hrefs[0].href;
                } else {
                    information[prop] = divs[i].innerHTML;
                }
            }
        }
        return information;
    });
}
