

export const tabs=[
    {
        value:1,
        type:'Minutes',
        label:'1min'
    },
    {
        value:5,
        type:'Minutes',
        label:'5min'
    },
    {
        value:1,
        type:'Hours',
        label:'1h'
    },
    {
        value:5,
        type:'Hours',
        label:'5h'
    },
    {
        value:168,
        type:'Hours',
        label:'7d'
    },

]


    export function getTabDetails(tabIndex){ 
        const tab = tabs.find((_,index)=>index===tabIndex)
        return tab
        }  