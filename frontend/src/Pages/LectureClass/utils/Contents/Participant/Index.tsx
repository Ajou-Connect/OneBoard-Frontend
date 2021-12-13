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
    students: any
}

const user = localStorage && localStorage.userInfo && JSON.parse(window.localStorage.userInfo);
let tempArr = [] as any;

function Index(props: parProps) {
    const [Refresh, setRefresh] = useState<number>(0);
    const [pars, setpars] = useState<Array<any>>([]);
    let ccc = false;
    //render participants

    useEffect(() => {
        console.log(props.students);
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
        console.log(props.students);
        let students = props.students && props.students.filter((student: any) => {
            if (student.attendance === 'O') return true;
        });
        console.log(students);
        tempArr = students && students.map((student: any) => {
            return (
                <Row className="participantsclass" id={student.student.email.split("@")[0]} style={{ color: 'black' }}>
                    <div>{student.student.name}</div>
                    <div>{student.activeScore}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><input type="checkbox" checked disabled={ccc} /></div>
                </Row>
            )
        })
        setpars(tempArr);
    }, [])

    useEffect(() => {
        console.log(pars);
        props.socket.on('newUser', (data: any) => {
            console.log('newUser', data);
            let email = data.message.email;
            console.log(data.message.email.split("@")[0]);
            try {
                if (!document.querySelector(`.participantsclass#${data.message.email.split("@")[0]}`)) {
                    console.log(pars);
                    addPar(data.message.name, "0", data.message.email.split("@")[0]);
                }
            } catch (err) {
                console.log(err);
            }
        })
        props.socket.on('disConnected', (data: any) => {
            console.log("disconneected", data);
            if (data == 'woasidh@ajou.ac.kr' || data == 'shalseh@ajou.ac.kr') {
                alert('수업이 종료되었습니다!');
                window.location.href = '/main';
            } else {
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
            }
        })
    }, [pars])


    function addPar(name: any, score: any, email: any) {
        console.log(pars);
        /* setpars(pars.concat([<Row className="participantsclass" id={email} style={{ color: 'black' }}>
            <div>{name}</div>
            <div>{score}</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><input type="checkbox" checked disabled={ccc} /></div>
        </Row>])) */
        tempArr.push(<Row className="participantsclass" id={email} style={{ color: 'black' }}>
            <div>{name}</div>
            <div>{score}</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><input type="checkbox" checked disabled={ccc} /></div>
        </Row>);
        const parArr = tempArr.map((temp: any) => {
            return (
                temp
            )
        })
        console.log(parArr);
        setpars(parArr);
        // setRefresh(Refresh + 1);
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

export default Index