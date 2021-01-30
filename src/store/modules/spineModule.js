//import axios from 'axios';

import axios from "axios";

const state = {
    spineWorkInModule: [
        //the reason for the id and title is because we use API from outside that also have these fields
        { id: 1,
            title: 'Spine is the best bones' },
        { id: 2,
            title: 'Collar Bone is the second best bones' }
    ]
};

const getters = {
    getAllSpinesWithGetter: (state) => state.spineWorkInModule
};

const actions = {
    //commit is a function, cant name it anything else
    async fetchAllspineFromActions({ commit }){
        const resposiblity = await axios.get('http://jsonplaceholder.typicode.com/todos');
        commit('setSpineStateFromMutation', resposiblity.data);
    },
    //title is a prperty in the API, cant change since this will be shipped along with other info to the display
    async addspineFromActions({commit}, title){
        const resposiblityOfAdd = await axios.post('http://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('addSpineStateFromMutation', resposiblityOfAdd.data);
    },
    async deleteSpineFromActions({commit}, idSpine){
         await axios.delete(`http://jsonplaceholder.typicode.com/todos/${idSpine}`);
        commit('deleteSpineStateFromMutation', idSpine);
    },
    async filterSpineFromActions({commit}, ValueOfSpine){
        const filterValueOfSpine = parseInt(ValueOfSpine.target.value);
        const resposiblityOfFilter =await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${filterValueOfSpine}`);
        commit('setSpineStateFromMutation', resposiblityOfFilter.data);
    },
    async updateSpineFromActions({commit}, updateSpine){
        const resposiblityOfUpdate =await axios.put(`http://jsonplaceholder.typicode.com/todos/${updateSpine.id}`, updateSpine);
        commit('updateSpineStateFromMutation', resposiblityOfUpdate.data);
    },
};

const mutations = {
    setSpineStateFromMutation: (state, spineInMutation) =>(state.spineWorkInModule=spineInMutation),
    addSpineStateFromMutation: (state, addSpineInMutation) =>state.spineWorkInModule.unshift(addSpineInMutation),
    deleteSpineStateFromMutation: (state, deleteSpineInMutation) =>(state.spineWorkInModule=state.spineWorkInModule.filter((oneSpine)=>oneSpine.id!==deleteSpineInMutation)),
    updateSpineStateFromMutation: (state, updateSpineInMutation) =>{
    const index = state.spineWorkInModule.findIndex(oneSingleSine=>oneSingleSine.id===updateSpineInMutation.id);
        if(index !==-1){
            state.spineWorkInModule.splice(index, 1, updateSpineInMutation);
        }
}

};

export default {
    state, getters, actions, mutations
}