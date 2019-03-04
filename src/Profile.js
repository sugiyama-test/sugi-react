import React, { Component } from 'react';
import {Grid , Media}  from 'react-bootstrap';
import syokuji_computer from './image/syokuji_computer.png';
import mey from './image/mainimg.png';
import JS from './image/JSLogo.png';
import rirekisyo from './image/syuukatsu_rirekisyo_entrysheet_naname.png';
import SlidePhoto from './SlidePhoto';

//趣味を書いていくコンポーネント
export default class profile extends Component {

    render() {
        return (
            <Grid>
                <div className="margin-50">
                    <Media className="mb-50">
                        <Media.Left align="top">
                            <img width={90} height={90} src={syokuji_computer} alt="thumbnail" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>プロフィール</Media.Heading>
                            <ul>
                                <li>氏名：</li>
                                <li>生年月日：1993年3月2日(25才)</li>
                                <li>出身地：福岡県</li>
                            </ul>
                        </Media.Body>
                    </Media>
                    <Media className="mb-50">
                        <Media.Left align="top">
                            <img width={90} height={90} src={mey} alt="thumbnail" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>趣味</Media.Heading>
                            <ul>
                                <li>ジブリ</li>
                                <li>キャンプ</li>
                                <li>映画鑑賞</li>
                            </ul>
                        </Media.Body>
                    </Media>
                    <Media className="mb-50">
                        <Media.Left align="top">
                            <img width={90} height={90} src={rirekisyo} alt="thumbnail" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>経歴</Media.Heading>
                            <ul>
                                <li>2011年３月</li>
                                <li>2011年４月</li>
                                <li>2015年３月</li>
                                <li>2015年４月</li>
                                <li>2018年３月</li>
                                <li>2018年４月</li>
                            </ul>
                        </Media.Body>
                    </Media>
                    <Media>
                        <Media.Left align="top">
                            <img width={90} height={90} src={JS} alt="thumbnail" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>スキル</Media.Heading>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>React</li>
                            </ul>
                        </Media.Body>
                    </Media>
                </div>
            </Grid>
        );
    }
}