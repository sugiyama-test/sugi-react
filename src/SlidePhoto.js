import React, { Component } from 'react';
import { Carousel }  from 'react-bootstrap';
import photo1 from './image/walluper552.jpg';
import photo2 from './image/walluper552.jpg';
import photo3 from './image/walluper552.jpg';
import photo4 from './image/walluper552.jpg';
import photo5 from './image/walluper552.jpg';

export default class slidePhoto extends Component {
    render() {

        return (
            <div className="margin-50">
              <div className="margin-50">
                <p className="text text-center">aaaaaaaa</p>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  "
                      src={photo1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>2018年12月 12月全社会</h3>
                      <p>2018年最後の全社会で集合写真を撮影しました</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={photo2}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>2018年5月 春キャンプ</h3>
                      <p>5月にみんなで秩父へキャンプに行きました</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={photo3}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>2018年10月 社員旅行</h3>
                      <p>10月に初のキャンプに行きました</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={photo4}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>2018年6月 Newオフィス！</h3>
                      <p>オフィスへ移転しました</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={photo5}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>2018年12月 三社合同忘年会</h3>
                      <p>３社メンバーが初めて揃いました！！(人多いなっ！)</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
        );
    }
}