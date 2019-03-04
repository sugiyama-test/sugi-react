import React, { Component } from 'react';
import {Media , Grid}  from 'react-bootstrap';
import React_logo from './image/React_logo.png';

export default class Top extends Component {
    render() {
        return (
            <Grid>
            <div className="margin-50">
            <Media xs={12} md={12}>
                <Media.Left align="top">
                <img width={90} height={70} src={React_logo} alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                <Media.Heading>このサイトはReactの紹介の為に作った試験的なサイトです</Media.Heading>
                <p>
                ReactはFaceBookが開発したJSフレームワーク。Webページ内の各パーツを「コンポーネント」として扱うことができる点や、それをHTMLタグで記述する「JSX」が使える点、｢仮想DOM (VirtualDOM)｣を採用し描画性能が優れている点などから、今注目のフレームワークである！！
                </p>
                </Media.Body>
            </Media>
            </div>
            </Grid>
        );
    }
}