import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const ListBoxCSS = css`
#part_listbox::-webkit-scrollbar {
    display: none;
}
`

const ListBox = styled.ul`
width : 100%;
overflow-y : scroll;
padding :0;
background-color : #F9F9F9;
::-webkit-scrollbar {
    display: none;
}
max-height : 32vh;
margin-bottom : 0;
`

const Row = styled.li`
display :grid;
grid-template-columns: repeat(3, 1fr);
color : #818181;
text-align : center;
font-size :1rem;
margin-bottom : 1vh;
height : 3vh;
`

interface parProps {
    socket: any
}

const user = localStorage && localStorage.userInfo && JSON.parse(window.localStorage.userInfo);

function Index1(props: parProps) {

    const [pars, setpars] = useState<Array<any>>([]);
    let ccc = false;
    //render participants

    useEffect(() => {
    }, [])

    function renderPtcs(): any {
       const names = ["김동현","소현영","김희승","박민우","공민정"];
        const scores = ['0', '0', '0', '0', '0'];
        const result = names.map((value, index) =>
        (
            <Row style={{ color: 'black' }}>
                <div>{value}</div>
                <div>{scores[index]}</div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><input type="checkbox" checked disabled={ccc} /></div>
            </Row>
        ))
        return result;
    }

    useEffect(() => {

    }, [])

    useEffect(() => {
        props.socket.on('newUser', (data: any) => {
            console.log('newUser', data);
            let email = data.message.email;
            console.log(data.message.email.split("@")[0]);
            try {
                if (!document.querySelector(`.participantsclass#${data.message.email.split("@")[0]}`)) {
                    addPar(data.message.name, "0", data.message.email.split("@")[0]);
                }
            } catch (err) {
                console.log(err);
            }
        })
        props.socket.on('disConnected', (data: any) => {
            console.log("disconneected", data);
            try {
                const toRemove = document.querySelectorAll(`.participantsclass#${data.split("@")[0]}`) as NodeListOf<HTMLElement>;
                console.log(toRemove);
                toRemove.forEach((elm: HTMLElement) => {
                    console.log(elm);
                    elm.remove();
                })
            }catch(err){
                console.log(err);
            }
        })
    }, [pars])


    function addPar(name: any, score: any, email: any) {
        setpars(pars.concat([<Row className="participantsclass" id={email} style={{ color: 'black' }}>
            <div>{name}</div>
            <div>{score}</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><input type="checkbox" checked disabled={ccc} /></div>
        </Row>]))
    }

    return (
        <>
            <Row style={{ color: 'black' }}>
                <div>name</div>
                <div>score</div>
                <div>attendance</div>
            </Row>
            <ListBox id="part_listbox">
                {pars}
            </ListBox>
        </>
    )
}

export default Index1