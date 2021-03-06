const form_temlate = [
  {
    type: "text",
    label: "Username",
    field: "username",
    validations: [
      {
        name: "required",
        validator: "required",
        message: "Name Required"
      },
      {
        name: "pattern",
        validator: "^[a-zA-Z]+$",
        message: "Accept only text"
      }
    ],
    children:[
      {
        type: "text",
       label: "Skill",
       field: "Skill",
      },
      {
        type: "text",
        label: "Designation",
        field: "name",
      },
    ]
  }, 
  {
    type: "text",
    label: "City",
    field: "name",
    validations: [
      {
        name: "required",
        validator: "required",
        message: "Password Required"
      }
    ]
  },
  {
    type:"select",
    label:"Years of Experience",
    options:["1","2","3","4","5"],
  },
  {
    type:'radio',
    label:"Gender",
    options: ['Male' ,'Female']
  },
];

export default form_template