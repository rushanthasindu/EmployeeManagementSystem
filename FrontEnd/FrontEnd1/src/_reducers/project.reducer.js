const initialState = { anchor: 'left',
    projectList: [],
    employeeList:[],
    employeeList1:[],
    employeeList2:[],
    employeeList3:[],
    employeeList4:[],
    employeeList5:[],
    employeeList6:[],
    employeeList7:[],
    employeeList8:[],
    employeeList9:[],
    employeeList10:[],
    employeeList11:[],
    employeeList12:[],
    employeeList13:[],
    employeeList14:[],
    employeeList15:[],
    employeeList16:[],
    employeeList17:[],
    employeeList18:[],
    employeeList19:[],
    skilledEmployeeList: [],
    skilledEmployeeList1: [],
    skilledEmployeeList2: [],
    skilledEmployeeList3: [],
    skilledEmployeeList4: [],
    skilledEmployeeList5: [],
    skilledEmployeeList6: [],
    skilledEmployeeList7: [],
    skilledEmployeeList8: [],
    skilledEmployeeList9: [],
    skilledEmployeeList10: [],
    skilledEmployeeList11: [],
    skilledEmployeeList12: [],
    skilledEmployeeList13: [],
    skilledEmployeeList14: [],
    skilledEmployeeList15: [],
    skilledEmployeeList16: [],
    skilledEmployeeList17: [],
    skilledEmployeeList18: [],
    skilledEmployeeList19: [],
    open: false,
    id: '',
    projectId: '',
    projectName: '',
    startDate: '',
    endDate: '',
    actualCompletionDate: '',
    technology: '',
    allocation: [],
    allocation1: [],
    allocation2: [],
    allocation3: [],
    allocation4: [],
    allocation5: [],
    allocation6: [],
    allocation7: [],
    allocation8: [],
    allocation9: [],
    allocation10: [],
    allocation11: [],
    allocation12: [],
    allocation13: [],
    allocation14: [],
    allocation15: [],
    allocation16: [],
    allocation17: [],
    allocation18: [],
    allocation19: [],
    
    completionRate: ''
 };


export function project(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_PROJECTS':
            return {
            ...state,
            projectList: action.projectList
            };
        case 'FETECHED_EMPLOYEES_BY_SKILL':
            return {
            ...state,
            skilledEmployeeList: action.employeeList
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL1':
            return {
            ...state,
            skilledEmployeeList1: action.employeeList1
        };

        case 'FETECHED_EMPLOYEES_BY_SKILL2':
            return {
            ...state,
            skilledEmployeeList2: action.employeeList2
        };

        case 'FETECHED_EMPLOYEES_BY_SKILL3':
            return {
            ...state,
            skilledEmployeeList3: action.employeeList3
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL4':
            return {
            ...state,
            skilledEmployeeList4: action.employeeList4
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL5':
            return {
            ...state,
            skilledEmployeeList5: action.employeeList5
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL6':
            return {
            ...state,
            skilledEmployeeList6: action.employeeList6
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL7':
            return {
            ...state,
            skilledEmployeeList7: action.employeeList7
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL8':
            return {
            ...state,
            skilledEmployeeList8: action.employeeList8
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL9':
            return {
            ...state,
            skilledEmployeeList9: action.employeeList9
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL10':
            return {
            ...state,
            skilledEmployeeList10: action.employeeList10
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL11':
            return {
            ...state,
            skilledEmployeeList11: action.employeeList11
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL12':
            return {
            ...state,
            skilledEmployeeList12: action.employeeList12
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL13':
            return {
            ...state,
            skilledEmployeeList13: action.employeeList13
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL14':
            return {
            ...state,
            skilledEmployeeList14: action.employeeList14
        };

        case 'FETECHED_EMPLOYEES_BY_SKILL16':
            return {
            ...state,
            skilledEmployeeList16: action.employeeList16
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL17':
            return {
            ...state,
            skilledEmployeeList17: action.employeeList17
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL18':
            return {
            ...state,
            skilledEmployeeList18: action.employeeList18
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL19':
            return {
            ...state,
            skilledEmployeeList19: action.employeeList19
        };

        case 'FETECHED_EMPLOYEES_BY_SKILL':
            return {
            ...state,
            skilledEmployeeList: action.employeeList
        };
        case 'FETECHED_EMPLOYEES_BY_SKILL':
            return {
            ...state,
            skilledEmployeeList: action.employeeList
        };
       

        case 'FETECHED_EMPLOYEES_BY_SKILL':
            return {
            ...state,
            skilledEmployeeList: action.employeeList
        };

        case 'FETECHED_EMPLOYEES_BY_SKILL':
            return {
            ...state,
            skilledEmployeeList: action.employeeList
        };

        case 'FETECHED_EMPLOYEES_BY_SKILL1':
            return {
            ...state,
            skilledEmployeeList1: action.employeeList1
        };


        case 'FETECHED_ALL_EMPLOYEES':
                return {
                    ...state,
                    employeeList: action.employeeList
                };
                case 'FETECHED_ALL_EMPLOYEES1':
                return {
                    ...state,
                    employeeList1: action.employeeList
                };
        case 'PROJECT_DETAIL':
            return {
                ...state,
                ...action,
            };
        case "PROJECT_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }