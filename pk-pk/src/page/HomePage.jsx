import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import HobbyList from '../components/Home/Hobbylist';

HomePage.propTypes = {}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch();

    console.log('Hobby List', hobbyList)
    return(
    <div>
        <h1>Redux Hook homepage</h1>
        <input type="text" placeholder="muon nhap gi thi nhap"></input>
        <input type="text" placeholder="muon nhap gi thi nhap"></input>
        
        <button>nut cho m bam new</button>

        <p>ket qua sau khi bam nut</p>
        <p>xuat cai dau tien</p>
        <p>xuat cai thu 2</p>
    </div>
    )
}

export default HomePage;