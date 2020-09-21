import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        acknowledgedStandardsError: true,
        candidateStandardsError: true,
        standardsInDevelopmentError: true,
        acknowledgedStandards: [],
        candidateStandards: [],
        standardsInDevelopment: [],
        statistics: [],
        uniqueContributors: 0,
        uniqueAffiliations: 0,
        storeWasInitialized: false,
        standardsPerYear: {}
    },

    mutations: {
        setAcknowledgedStandards(state, data) {
            state.acknowledgedStandards = data;
        },
        setCandidateStandards(state, data) {
            state.candidateStandards = data;
        },
        setStandardsInDevelopment(state, data) {
            state.standardsInDevelopment = data;
        },
        setAcknowledgedStandardsError(state, value) {
            state.acknowledgedStandardsError = value;
        },
        setCandidateStandardsError(state, value) {
            state.candidateStandardsError = value;
        },
        setStandardsInDevelopmentError(state, value) {
            state.standardsInDevelopmentError = value;
        },
        setUniqueContributors(state, value){
            state.uniqueContributors = value;
        },
        setUniqueAffiliations(state, value){
            state.uniqueAffiliations = value;
        },
        setStatistics(state, value){
            state.statistics = value;
        },
        setStoreInitialized(state, value){
            state.storeWasInitialized = value;
        },
        setStatisticsPerYear(state, value){
            state.standardsPerYear = value;
        }
    },
    actions: {
        loadStandards({commit}, payload) {
            if (payload.standards) {
                switch (payload.type) {
                    case 'erkende-standaard':
                        commit('setAcknowledgedStandards', payload.standards);
                        commit('setAcknowledgedStandardsError', false);
                        break;
                    case 'kandidaat-standaard':
                        commit('setCandidateStandards', payload.standards);
                        commit('setCandidateStandardsError', false);
                        break;
                    case 'standaard-in-ontwikkeling':
                        commit('setStandardsInDevelopment', payload.standards);
                        commit('setStandardsInDevelopmentError', false);
                        break;
                }
            }
        },
        loadStatistics({commit}){
            try {
                const stats = require('../../public/data/statistics.json.bak');
                const summary = stats[0];
                commit('setUniqueContributors', summary.uniqueContributors);
                commit('setUniqueAffiliations', summary.uniqueAffiliations);

                // Sort statistics based on standard
                let list = stats.slice(1, stats.length);
                list = list.sort( (a, b) => {
                    const nameA = a.standard.toUpperCase();
                    const nameB = b.standard.toUpperCase();
                    return (nameA < nameB) ? -1 : (nameA > nameB ) ? 1 : 0;
                });

                let filteredAnnual = {};
                for(let standard of list){

                    // Sort names of affiliations per standard
                    if(standard.contributors){
                        standard.contributors = standard.contributors.sort( (a, b) => {
                            const nameA = a.affiliation.toUpperCase();
                            const nameB = b.affiliation.toUpperCase();
                            return (nameA < nameB) ? -1 : (nameA > nameB ) ? 1 : 0;
                        });
                    }


                    // Create separate list with standard filtered per year
                    if(standard.publicationDate){
                        if(!isNaN(Date.parse(standard.publicationDate))){
                            const year = new Date(standard.publicationDate).getFullYear();

                            if(!filteredAnnual.hasOwnProperty(year)){
                                filteredAnnual[year] = [];
                            }
                            filteredAnnual[year].push(standard);

                        } else {
                            if(!filteredAnnual.hasOwnProperty('TBD')){
                                filteredAnnual['TBD'] = [];
                            }
                            filteredAnnual['TBD'].push(standard);
                        }
                    }
                }

                commit('setStatistics', list);
                commit('setStatisticsPerYear', filteredAnnual);
            } catch (e) {
                console.log('Something went wrong when trying to load the statistics:');
                console.log(e);
            }
        }
    }
});
