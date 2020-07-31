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
        storeWasInitialized: false
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
                const stats = require('../../data/statistics.json');
                const summary = stats[0];
                commit('setUniqueContributors', summary.uniqueContributors);
                commit('setUniqueAffiliations', summary.uniqueAffiliations);

                commit('setStatistics', stats.slice(1, stats.length));

            } catch (e) {
                console.log('No statistics file available.');
            }
        }
    }
});
