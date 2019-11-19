import React, { Component } from 'react';
import moment from 'moment';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { projectAction } from '../_actions';
import { vendorAction } from '../_actions';
import { withRouter } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const drawerWidth = 240;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const skillsMap =[
    { value: 'pm', label: 'Project Management' },
    { value: 'dotnet', label: '.NET' },
    { value: 'android', label: 'Android' },
    { value: 'angular', label: 'Angular' },
    { value: 'c', label: 'C' },
    { value: 'csharp', label: 'C#' },
    { value: 'cpp', label: 'C++' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'html', label: 'HTML' }, 
    { value: 'ios', label: 'iOS' },
    { value: 'java', label: 'JAVA' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'node', label: 'Node JS' },  
    { value: 'php', label: 'PHP' },
    { value: 'react', label: 'React JS' },
    { value: 'python', label: 'Python' },
    { value: 'reactnative', label: 'React Native' }
];

const styles = theme => ({

    root: {
        flexGrow: 1,
      },

  contentRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
 toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});
const crOptions =[
    { value: 'ONGOING', label: 'Ongoing' },
    { value: 'COMPLEATED', label: 'Compleated' },
];
class AddEditProject extends Component {

    state={
        test:false
    }
  
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(projectAction.onChangeProps(prop, event));
        if (prop === 'technology') {
            dispatch(projectAction.getEmployeesBySkill(event.target.value));
        } 
        if (prop === 'technology1') {
            dispatch(projectAction.getEmployeesBySkill1(event.target.value));
        } 

        if (prop === 'technology2') {
            dispatch(projectAction.getEmployeesBySkill2(event.target.value));
        } 
        if (prop === 'technology2') {
            dispatch(projectAction.getEmployeesBySkill2(event.target.value));
        } 
        if (prop === 'technology3') {
            dispatch(projectAction.getEmployeesBySkill3(event.target.value));
        } 

        if (prop === 'technology3') {
            dispatch(projectAction.getEmployeesBySkill3(event.target.value));
        } 
        if (prop === 'technology4') {
            dispatch(projectAction.getEmployeesBySkill4(event.target.value));
        } 
        if (prop === 'technology5') {
            dispatch(projectAction.getEmployeesBySkill5(event.target.value));
        } 
        if (prop === 'technology6') {
            dispatch(projectAction.getEmployeesBySkill6(event.target.value));
        } 
        if (prop === 'technology7') {
            dispatch(projectAction.getEmployeesBySkill7(event.target.value));
        } 
        if (prop === 'technology8') {
            dispatch(projectAction.getEmployeesBySkill8(event.target.value));
        } 
        if (prop === 'technology9') {
            dispatch(projectAction.getEmployeesBySkill9(event.target.value));
        } 
   
    };

    componentDidMount() {
        const { match : {params } } = this.props;

        if(params.id){
            const { dispatch } = this.props;
            dispatch(projectAction.getProjectById(params.id));
            dispatch(projectAction.getAllEmployeeList());
        }
    }


    handleClick(event){
        const { match : {params } } = this.props;
        const { dispatch, authentication } = this.props;
        var dateDiff1 =   new Date(this.props.project.startDate).getTime()-new Date().getTime();    //Future date - current date
        var dateDiff2 = new Date(this.props.project.endDate).getTime()-new Date().getTime();    //Future date - current date
        var dateDiff3 = new Date(this.props.project.endDate).getTime() - new Date(this.props.project.startDate).getTime();    //Future date - current date

      if (dateDiff1>0 && dateDiff2>0  && dateDiff3>0){

        fetch('http://192.168.8.100:3001/project/inform', {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            //console.log(responseJson);
                  this.setState({
                    status: responseJson
                  })
               //console.log(this.state.data);
               })
               .catch((error) => {
                  this.setState({
                    status: '0'
               })
               });
        let payload={
               // id: this.props.project._id,
                projectId: this.props.project.projectId,
                projectCode: this.props.project.projectCode,
                projectName: this.props.project.projectName,
                startDate: this.props.project.startDate,
                endDate: this.props.project.endDate,
                completionRate: this.props.project.completionRate,
                
                customerName: this.props.project.customerName,
                customerContact: this.props.project.customerContact,
                customerEmail: this.props.project.customerEmail,
                
                
                type: this.props.project.technology,
                allocation: this.props.project.allocation,
                comment: this.props.project.comment,
               
                
                type1: this.props.project.technology1,
                allocation1: this.props.project.allocation1,
                comment1: this.props.project.comment1,
               
                
                type2: this.props.project.technology2,
                allocation2: this.props.project.allocation2,
                comment2: this.props.project.comment2,
               
                
                type3: this.props.project.technology3,
                allocation3: this.props.project.allocation3,
                comment3: this.props.project.comment3,
               
                
                type3: this.props.project.technology3,
                allocation3: this.props.project.allocation3,
                comment3: this.props.project.comment3,
               
                
                type3: this.props.project.technology3,
                allocation3: this.props.project.allocation3,
                comment3: this.props.project.comment3,
               
                
                type4: this.props.project.technology4,
                allocation4: this.props.project.allocation4,
                comment4: this.props.project.comment4,
               
                
                type5: this.props.project.technology5,
                allocation5: this.props.project.allocation5,
                comment5: this.props.project.comment5,
               
                
                type6: this.props.project.technology6,
                allocation6: this.props.project.allocation6,
                comment6: this.props.project.comment6,
               
                
                type7: this.props.project.technology7,
                allocation7: this.props.project.allocation7,
                comment7: this.props.project.comment7,
               
                
                type8: this.props.project.technology8,
                allocation8: this.props.project.allocation8,
                comment8: this.props.project.comment9,
               
                
                type9: this.props.project.technology9,
                allocation9: this.props.project.allocation9,
                comment9: this.props.project.comment9
               
                
      

        }
       
console.log(payload);
// alert(payload);
        if(params.id){
            dispatch(projectAction.editProjectInfo(params.id, payload));
        }else{
            dispatch(projectAction.createProject(payload));
            for (const employeeId of payload.allocation) {
                dispatch(projectAction.updateProjectCount(employeeId))
            }
        }
    }

    else alert("Please Enter a Valied Date")
    }

   render() {
     const { classes } = this.props;
     const { match : {params } } = this.props;
     console.log(this.props.project);

     const employeeList = this.props.project.skilledEmployeeList.length <= 0 ? this.props.project.employeeList :
     this.props.project.skilledEmployeeList

     const employeeList1 = this.props.project.skilledEmployeeList1.length <= 0 ? this.props.project.employeeList1 :
     this.props.project.skilledEmployeeList1

     const employeeList2 = this.props.project.skilledEmployeeList2.length <= 0 ? this.props.project.employeeList2 :
     this.props.project.skilledEmployeeList2

     const employeeList3 = this.props.project.skilledEmployeeList3.length <= 0 ? this.props.project.employeeList3 :
     this.props.project.skilledEmployeeList3
   
     const employeeList4 = this.props.project.skilledEmployeeList4.length <= 0 ? this.props.project.employeeList4 :
     this.props.project.skilledEmployeeList4
   
     const employeeList5 = this.props.project.skilledEmployeeList5.length <= 0 ? this.props.project.employeeList5:
     this.props.project.skilledEmployeeList5
   
     const employeeList6 = this.props.project.skilledEmployeeList6.length <= 0 ? this.props.project.employeeList6 :
     this.props.project.skilledEmployeeList6
   
     const employeeList7 = this.props.project.skilledEmployeeList7.length <= 0 ? this.props.project.employeeList7 :
     this.props.project.skilledEmployeeList7
   
     const employeeList8 = this.props.project.skilledEmployeeList8.length <= 0 ? this.props.project.employeeList8 :
     this.props.project.skilledEmployeeList8
   
     const employeeList9 = this.props.project.skilledEmployeeList9.length <= 0 ? this.props.project.employeeList9 :
     this.props.project.skilledEmployeeList9
   
     

     function InsertText(props) {
        return <Typography>{'Create Project'}</Typography>;
      }
      
      function EditText(props) {
          return <Typography>{`Edit Project Details`}</Typography>;
      }


    function SegHeader() {
        if(params.id){
            return <EditText />;
        }
        return <InsertText />;
    }
     
      return (
        
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <SegHeader />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">                            
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div>
                            <Paper className={classes.contentRoot} elevation={1}>
                                <form className={classes.container}>
                                <Grid container spacing={24}>
                                        <Grid item xs={5}>
                                            <TextField
                                                id="project Code"
                                                label="Project Code"
                                                multiline
                                                rowsMax="2"
                                                className={classes.textField}
                                                value={this.props.project.projectCode || ''}
                                                onChange={this.handleChange('projectCode')}
                                                margin="normal"
                                            />
                                            </Grid>
                                        <Grid item xs={5}>
                                            <TextField
                                                id="projectName"
                                                label="Project Name"
                                                multiline
                                                rowsMax="2"
                                                className={classes.textField}
                                                value={this.props.project.projectName || ''}
                                                onChange={this.handleChange('projectName')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <TextField
                                                id="customerName"
                                                label="Customer Name"
                                                multiline
                                                rowsMax="2"
                                                className={classes.textField}
                                                value={this.props.project.customerName || ''}
                                                onChange={this.handleChange('customerName')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <TextField
                                                id="customerContact"
                                                label="Customer Contact No"
                                                multiline
                                                rowsMax="2"
                                                className={classes.textField}
                                                value={this.props.project.customerContact || ''}
                                                onChange={this.handleChange('customerContact')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <TextField
                                                id="customerEmail"
                                                label="Customer Email"
                                                multiline
                                                rowsMax="2"
                                                className={classes.textField}
                                                value={this.props.project.customerEmail || ''}
                                                onChange={this.handleChange('customerEmail')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        </Grid>
                                    <Grid container spacing={24}>
                                    <Grid item xs={10}>
                                            <TextField
                                                id="startDate"
                                                label="Project Start Date"
                                                type="date"
                                                className={classes.textField}
                                                defaultValue={`${moment().year()}-${moment().month()}-${moment().day()}`}
                                                value={moment(this.props.project.startDate).format('YYYY-MM-DD')}
                                                onChange={this.handleChange('startDate')}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                            />
                                        </Grid>
                                        </Grid>
                                        <Grid container spacing={24}>
                                        <Grid item xs={10}>
                                        <TextField
                                                id="endDate"
                                                label="DeadLine"
                                                type="date"
                                                className={classes.textField}
                                                defaultValue={`${moment().year()}-${moment().month()}-${moment().day()}`}
                                                value={moment(this.props.project.endDate).format('YYYY-MM-DD')}
                                                onChange={this.handleChange('endDate')}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                            />
                                        </Grid>
                                        </Grid>
                                        <Grid container spacing={24}>
                                        <Grid item xs={6}>
                                                <TextField
                                                    id="technology"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology || ''}
                                                    onChange={this.handleChange('technology')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation || []}
                                                    onChange={this.handleChange('allocation')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >
                                                    {(employeeList).map(employee1 => (
                                                        <MenuItem key={employee1._id} value={employee1._id}>
                                                        {`${employee1.firstName} ${employee1.lastName} - ${employee1.reliability}`}
                                                        </MenuItem>
                                                    ))}
                                                  
                                                </Select>

                                                <TextField
                                                    id="comment"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment || ''}
                                                    onChange={this.handleChange('comment')}
                                                    margin="normal"
                                                />


                                        </Grid> 
                                        
                                        <Grid item xs={6}>
                                            
                                                <TextField
                                                    id="technology1"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology1 || ''}
                                                    onChange={this.handleChange('technology1')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation1 || []}
                                                    onChange={this.handleChange('allocation1')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >

                                                        {(employeeList1).map(employee => (
                                                        <MenuItem key={employee._id} value={employee._id}>
                                                        {`${employee.firstName} ${employee.lastName} - ${employee.reliability}`}
                                                        </MenuItem>
                                                     ))}
                                                </Select>

                                                <TextField
                                                    id="comment1"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment1 || ''}
                                                    onChange={this.handleChange('comment1')}
                                                    margin="normal"
                                                />
                                            

                                        </Grid>
                                        <Grid item xs={6}>
                                           
                                        <TextField
                                                    id="technology2"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology2 || ''}
                                                    onChange={this.handleChange('technology2')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation2 || []}
                                                    onChange={this.handleChange('allocation2')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >

                                                        {(employeeList2).map(employee => (
                                                        <MenuItem key={employee._id} value={employee._id}>
                                                        {`${employee.firstName} ${employee.lastName} - ${employee.reliability}`}
                                                        </MenuItem>
                                                     ))}
                                                </Select>

                                                <TextField
                                                    id="comment2"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment2 || ''}
                                                    onChange={this.handleChange('comment2')}
                                                    margin="normal"
                                                />
                                            

                                        </Grid> 
                                        
                                        <Grid item xs={6}>
                                           
                                        <TextField
                                                    id="technology3"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology3 || ''}
                                                    onChange={this.handleChange('technology3')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation3 || []}
                                                    onChange={this.handleChange('allocation3')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >

                                                        {(employeeList3).map(employee => (
                                                        <MenuItem key={employee._id} value={employee._id}>
                                                        {`${employee.firstName} ${employee.lastName} - ${employee.reliability}`}
                                                        </MenuItem>
                                                     ))}
                                                </Select>

                                                <TextField
                                                    id="comment3"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment3 || ''}
                                                    onChange={this.handleChange('comment3')}
                                                    margin="normal"
                                                />
                                            

                                        </Grid>
                                        <Grid item xs={6}>
                                                <TextField
                                                    id="technology4"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology4 || ''}
                                                    onChange={this.handleChange('technology4')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation4 || []}
                                                    onChange={this.handleChange('allocation4')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >
                                                    {(employeeList4).map(employee1 => (
                                                        <MenuItem key={employee1._id} value={employee1._id}>
                                                        {`${employee1.firstName} ${employee1.lastName} - ${employee1.reliability}`}
                                                        </MenuItem>
                                                    ))}
                                                  
                                                </Select>

                                                <TextField
                                                    id="comment4"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment4 || ''}
                                                    onChange={this.handleChange('comment4')}
                                                    margin="normal"
                                                />


                                        </Grid> 
                                        <Grid item xs={6}>
                                                <TextField
                                                    id="technology5"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology5 || ''}
                                                    onChange={this.handleChange('technology5')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation5 || []}
                                                    onChange={this.handleChange('allocation5')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >
                                                    {(employeeList5).map(employee1 => (
                                                        <MenuItem key={employee1._id} value={employee1._id}>
                                                        {`${employee1.firstName} ${employee1.lastName} - ${employee1.reliability}`}
                                                        </MenuItem>
                                                    ))}
                                                  
                                                </Select>

                                                <TextField
                                                    id="comment5"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment5 || ''}
                                                    onChange={this.handleChange('comment5')}
                                                    margin="normal"
                                                />


                                        </Grid> 
                                        <Grid item xs={6}>
                                                <TextField
                                                    id="technology6"
                                                    select
                                                    label="Technology6"
                                                    className={classes.textField}
                                                    value={this.props.project.technology6 || ''}
                                                    onChange={this.handleChange('technology6')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation6 || []}
                                                    onChange={this.handleChange('allocation6')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >
                                                    {(employeeList6).map(employee1 => (
                                                        <MenuItem key={employee1._id} value={employee1._id}>
                                                        {`${employee1.firstName} ${employee1.lastName} - ${employee1.reliability}`}
                                                        </MenuItem>
                                                    ))}
                                                  
                                                </Select>

                                                <TextField
                                                    id="comment6"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment6 || ''}
                                                    onChange={this.handleChange('comment6')}
                                                    margin="normal"
                                                />


                                        </Grid> 
                                        <Grid item xs={6}>
                                                <TextField
                                                    id="technology7"
                                                    select
                                                    label="Technology7"
                                                    className={classes.textField}
                                                    value={this.props.project.technology7 || ''}
                                                    onChange={this.handleChange('technology7')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation7 || []}
                                                    onChange={this.handleChange('allocation7')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >
                                                    {(employeeList7).map(employee1 => (
                                                        <MenuItem key={employee1._id} value={employee1._id}>
                                                        {`${employee1.firstName} ${employee1.lastName} - ${employee1.reliability}`}
                                                        </MenuItem>
                                                    ))}
                                                  
                                                </Select>

                                                <TextField
                                                    id="comment7"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment7 || ''}
                                                    onChange={this.handleChange('comment7')}
                                                    margin="normal"
                                                />


                                        </Grid> 
                                        <Grid item xs={6}>
                                                <TextField
                                                    id="technology8"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology8 || ''}
                                                    onChange={this.handleChange('technology8')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation8 || []}
                                                    onChange={this.handleChange('allocation8')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >
                                                    {(employeeList8).map(employee1 => (
                                                        <MenuItem key={employee1._id} value={employee1._id}>
                                                        {`${employee1.firstName} ${employee1.lastName} - ${employee1.reliability}`}
                                                        </MenuItem>
                                                    ))}
                                                  
                                                </Select>

                                                <TextField
                                                    id="comment8"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment8 || ''}
                                                    onChange={this.handleChange('comment8')}
                                                    margin="normal"
                                                />


                                        </Grid> 

                                        <Grid item xs={6} >
                                                <TextField
                                                    id="technology9"
                                                    select
                                                    label="Technology"
                                                    className={classes.textField}
                                                    value={this.props.project.technology9 || ''}
                                                    onChange={this.handleChange('technology9')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Technology used in Project"
                                                    margin="normal"
                                                >
                                                    {skillsMap.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                                <InputLabel htmlFor="select-multiple">Allocation</InputLabel>
                                                <Select
                                                    multiple
                                                    value={this.props.project.allocation9 || []}
                                                    onChange={this.handleChange('allocation9')}
                                                    input={<Input id="select-multiple" />}
                                                    MenuProps={MenuProps}
                                                    >
                                                    {(employeeList9).map(employee1 => (
                                                        <MenuItem key={employee1._id} value={employee1._id}>
                                                        {`${employee1.firstName} ${employee1.lastName} - ${employee1.reliability}`}
                                                        </MenuItem>
                                                    ))}
                                                  
                                                </Select>

                                                <TextField
                                                    id="comment9"
                                                    label="Comments(Task(s))"
                                                    multiline
                                                    rowsMax="20"
                                                    className={classes.textField}
                                                    value={this.props.project.comment9 || ''}
                                                    onChange={this.handleChange('comment9')}
                                                    margin="normal"
                                                />


                                        </Grid> 
                                        
                                        

                                    </Grid>
                                        <Grid container spacing={12}>
                                            <Grid item xs={6}>
                                               
                                            </Grid>
                                       
                                        
                                            
                                       
                                            <Grid item xs={6}>
                                                
                                            </Grid> 
                                            
                                        </Grid>
                                                <Grid container spacing={24}>
                                                <Grid item xs={10} 
                                                
                                                >
                                                <TextField
                                                    id="status"
                                                    select
                                                    label="Status"
                                                    className={classes.textField}
                                                    value={this.props.vendor.status || ''}
                                                    onChange={this.handleChange('status')}
                                                    SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                    }}
                                                    helperText="Please select Employee's status"
                                                    margin="normal"
                                                >
                                                    {crOptions.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                        
                                    <br />
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                        </Grid>
                                        <Grid item xs={6}>
                                        </Grid>
                                        <Grid item xs={3} container justify="center">
                                            <Grid container spacing={24}>
                                                <Grid item xs={6} container justify="center">
                                                    <Button variant="contained" color="secondary" className={classes.button} component='a' href="/project">
                                                        Cancel
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6} container justify="flex-start">
                            
                                                    <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}

//export default Home;

AddEditProject.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}


const connectedAddEditProjectPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddEditProject)));

export { connectedAddEditProjectPage as AddEditProject };