import React,{useState} from 'react';
import styled from 'styled-components';


const TabContent = styled.div`
    width:100%;
    background-color:${({ theme }) => theme.colors.light};
    border-radius:5px;
    overflow: hidden;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
`
const TabsNavigation = styled.div`
     background-color:${({ theme }) => theme.colors.orange};
     color:${({ theme }) => theme.colors.light};
     display:flex;
     justify-content:space-between;
`
const TabItem = styled.div`
    padding:20px;
`

const Tab = styled.div`
    position:relative;
    padding:10px;
    background-color: ${({isActive,theme})=>isActive ? theme.colors.light : 'transperant'};
    cursor:${({isActive})=>isActive ? 'default' : 'pointer'};

    svg {
        width:30px;
        height:30px;
        fill: ${({isActive,theme})=>isActive ? theme.colors.primary : theme.colors.light};
        margin: 0 auto;
        display: block;
    }
    
    span {
        display: block;
        text-align: center;
        color: ${({isActive,theme})=>isActive ? theme.colors.primary : theme.colors.light};
    }
    
`

const TabContentComponent = ({items})=> {

    const [currentTab, setCurrentTab] =useState(0);

    return (
        <TabContent>
        <TabsNavigation>
            {items.map(({icon:Icon,title},index)=>(
                <Tab 
                    isActive={index===currentTab}
                    onClick={()=>setCurrentTab(index)}
                >
                    <Icon/>
                    <span>{title}</span>
                </Tab>
            ))}    
        </TabsNavigation>
        {items.map(({component:Component},index)=> index===currentTab ? (
            <TabItem>
                <Component/>
            </TabItem>
        ) : null)}
    </TabContent>
    )
}

export default TabContentComponent;