import { userService } from '../_services';
import { history } from '../_helpers';
import { vendorAction } from './index'

function getProjectList(){
    return dispatch => {
        let apiEndpoint = '/project';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeProjectList(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}


function getEmployeesBySkill(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill1(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction1(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill1(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction1(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill2(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction2(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill3(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction3(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill4(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction4(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill5(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction5(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}


function getEmployeesBySkill6(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction6(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}


function getEmployeesBySkill7(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction7(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill8(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction8(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill9(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction9(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill10(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction10(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill11(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction11(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill12(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction12(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill13(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction13(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}
function getEmployeesBySkill14(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction14(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}
function getEmployeesBySkill15(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction15(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill16(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction16(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill17(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction17(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill18(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction18(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function getEmployeesBySkill19(skill){
    return dispatch => {
        let apiEndpoint = '/info/employees-by-skill/' + skill;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(getEmployeesBySkillAction19(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}



function getAllEmployeeList(){
    return dispatch => {
        let apiEndpoint = '/employee';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeEmployeeList(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}
function getAllEmployeeList1(){
    return dispatch => {
        let apiEndpoint = '/employee';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeEmployeeList1(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function createProject(payload){
    return dispatch => {
        let apiEndpoint = '/project';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createProjectInfo());
            history.push('/project');
            return response;
        })
    }
}

function updateProjectCount(employeeId){
    return dispatch => {
        let apiEndpoint = '/employee/'+ employeeId;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            const numOfProject = response.data.numOfProject;
            dispatch(vendorAction.editVendorInfo(employeeId, {numOfProject: numOfProject + 1}));
            history.push('/project');
            return response;
        })
    }
}

function getProjectById(id){

    return dispatch => {
        let apiEndpoint = '/project/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editProjectDetails(response.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editProjectInfo(id, payload){
    return dispatch => {
        let apiEndpoint = '/project/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedProjectInfo());
            history.push('/project');
        }) 
    }
}

function deleteProjectById(id){
    return dispatch => {
        let apiEndpoint = '/project/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(updatedProjectInfo());
            dispatch(projectAction.getProjectList());
            history.push('/project');
        })
    };
}

export function changeProjectList(projectList){
    return{
        type: "FETECHED_ALL_PROJECTS",
        projectList: projectList
    }
}


export function changeEmployeeList(employeeList){
    return{
        type: "FETECHED_ALL_EMPLOYEES",
        employeeList: employeeList
    }
}



export function changeEmployeeList1(employeeList){
    return{
        type: "FETECHED_ALL_EMPLOYEES1",
        employeeList1: employeeList
    }
}

export function getEmployeesBySkillAction(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL",
        employeeList: employeeList
    }
}

export function getEmployeesBySkillAction1(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL1",
        employeeList1: employeeList
    }
}



export function getEmployeesBySkillAction2(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL2",
        employeeList2: employeeList
    }
}


export function getEmployeesBySkillAction3(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL3",
        employeeList3: employeeList
    }
}


export function getEmployeesBySkillAction4(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL4",
        employeeList4: employeeList
    }
}

export function getEmployeesBySkillAction5(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL5",
        employeeList5: employeeList
    }
}

export function getEmployeesBySkillAction6(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL6",
        employeeList6: employeeList
    }
}

export function getEmployeesBySkillAction7(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL7",
        employeeList7: employeeList
    }
}

export function getEmployeesBySkillAction8(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL8",
        employeeList8: employeeList
    }
}

export function getEmployeesBySkillAction9(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL9",
        employeeList9: employeeList
    }
}


export function getEmployeesBySkillAction10(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL10",
        employeeList10: employeeList
    }
}

export function getEmployeesBySkillAction11(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL11",
        employeeList11: employeeList
    }
}

export function getEmployeesBySkillAction12(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL12",
        employeeList12: employeeList
    }
}

export function getEmployeesBySkillAction13(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL13",
        employeeList13: employeeList
    }
}

export function getEmployeesBySkillAction14(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL14",
        employeeList14: employeeList
    }
}

export function getEmployeesBySkillAction15(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL15",
        employeeList15: employeeList
    }
}


export function getEmployeesBySkillAction16(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL16",
        employeeList16: employeeList
    }
}



export function getEmployeesBySkillAction17(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL17",
        employeeList17: employeeList
    }
}

export function getEmployeesBySkillAction18(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL18",
        employeeList118: employeeList
    }
}

export function getEmployeesBySkillAction19(employeeList){
    return{
        type: "FETECHED_EMPLOYEES_BY_SKILL19",
        employeeList19: employeeList
    }
}



export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editProjectDetails(project){
    return{
        type: "PROJECT_DETAIL",
        id: project._id,
        projectId: project._id,
        projectCode: project.projectCode,
        projectName: project.projectName,
        startDate: project.startDate,
        endDate: project.endDate,
        actualCompletionDate: project.actualCompletionDate,
        technology: project.type,
        allocation: project.allocation,
        completionRate: project.completionRate,
        customerName: project.customerName,
        customerContact: project.customerContact,
        customerEmail: project.customerEmail,

        comment: project.comment,
        technology: project.type,
        allocation: project.allocation,

        comment1: project.comment1,
        technology1: project.type1,
        allocation1: project.allocation1,
        
        comment2: project.comment2,
        technology2: project.type2,
        allocation2: project.allocation2,
        
        comment3: project.comment3,
        technology3: project.type3,
        allocation3: project.allocation3,

        comment4: project.comment4,
        technology4: project.type4,
        allocation4: project.allocation4,

        comment5: project.comment5,
        technology5: project.type5,
        allocation5: project.allocation5,

        comment6: project.comment6,
        technology6: project.type6,
        allocation6: project.allocation6,

        comment7: project.comment7,
        technology7: project.type7,
        allocation7: project.allocation7,
        
        comment8: project.comment8,
        technology8: project.type8,
        allocation8: project.allocation8,
        
        comment9: project.comment9,
        technology9: project.type9,
        allocation9: project.allocation9,
        
        
        
    }
}

export function updatedProjectInfo(){
    return{
        type: "PROJECT_UPDATED"
    }
}

export function createProjectInfo(){
    return{
        type: "PROJECT_CREATED_SUCCESSFULLY"
    }
}

export function deleteProjectDetails(){
    return{
        type: "DELETED_PROJECT_DETAILS"
    }
}

export const projectAction = {
    getProjectList,
    getEmployeesBySkill,
    getEmployeesBySkill1,
    getEmployeesBySkill2,
    getEmployeesBySkill3,
    getEmployeesBySkill4,
    getEmployeesBySkill5,
    getEmployeesBySkill6,
    getEmployeesBySkill7,
    getEmployeesBySkill8,
    getEmployeesBySkill9,
    getEmployeesBySkill10,
    getEmployeesBySkill11,
    getEmployeesBySkill12,
    getEmployeesBySkill13,
    getEmployeesBySkill14,
    getEmployeesBySkill15,
    getEmployeesBySkill16,
    getEmployeesBySkill17,
    getEmployeesBySkill18,
    getEmployeesBySkill19,

    createProject,
    getProjectById,
    onChangeProps,
    editProjectInfo,
    deleteProjectById,
    getAllEmployeeList,
    getAllEmployeeList1,
    updateProjectCount,
};