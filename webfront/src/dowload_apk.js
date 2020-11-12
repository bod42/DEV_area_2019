import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import './App.css';


export default class APK extends React.Component {
dl_apk() {
    axios({
    url: 'http://localhost:8080/client.apk',
        method: 'GET',
        responseType: 'blob',
        }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'area.apk');
        document.body.appendChild(link);
        link.click();
    });
}
dl() {
    this.props.connected(3);
  }
componentDidMount() {
    this.dl_apk()
}
render() {
return (
    <div id="apkDls">
        <Link to='/' > 
            <button id="dlsApkBtn" 
            type="button" onClick={() => this.dl()}>
            Back to home
            </button> 
        </Link>
    </div>
        );
    }
}