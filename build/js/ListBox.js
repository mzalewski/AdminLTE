// Import React and HelloText class
import React from 'react';
// Create class called HelloBox that extends the base React Component class
export default class ListBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="box box-prdimary">
            <div className="box-header with-border">
              <h3 className="box-title">Recently Added Products</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <ul className="products-list product-list-in-box">
                <li className="item">
                  <div className="product-img">
                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                  </div>
                  <div className="product-info">
                    <a href="javascript::;" className="product-title">Samsung TV
                      <span className="label label-warning pull-right">$1800</span></a>
                        <span className="product-description">
                          Samsung 32" 1080p 60Hz LED Smart HDTV.
                        </span>
                  </div>
                </li>
                <li className="item">
                  <div className="product-img">
                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                  </div>
                  <div className="product-info">
                    <a href="javascript::;" className="product-title">Bicycle
                      <span className="label label-info pull-right">$700</span></a>
                        <span className="product-description">
                          26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                        </span>
                  </div>
                </li>
                <li className="item">
                  <div className="product-img">
                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                  </div>
                  <div className="product-info">
                    <a href="javascript::;" className="product-title">Xbox One <span className="label label-danger pull-right">$350</span></a>
                        <span className="product-description">
                          Xbox One Console Bundle with Halo Master Chief Collection.
                        </span>
                  </div>
                </li>
                <li className="item">
                  <div className="product-img">
                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                  </div>
                  <div className="product-info">
                    <a href="javascript::;" className="product-title">PlayStation 4
                      <span className="label label-success pull-right">$399</span></a>
                        <span className="product-description">
                          PlayStation 4 500GB Console (PS4)
                        </span>
                  </div>
                </li>
                
              </ul>
            </div>
            
            <div className="box-footer text-center">
              <a href="javascript::;" className="uppercase">View All Products</a>
            </div>
            
          </div>;
    }
}