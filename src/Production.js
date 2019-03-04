import React, { Component } from 'react';
import SlidePhoto from './SlidePhoto';

//時計のコンポーネント
export default class Production extends Component {
        // 描画内容を返す
        render () {
          return (
            <div className="Stopwatch margin-50">
                <SlidePhoto></SlidePhoto>
            </div>
          )
        }
      }