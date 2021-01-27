import React, {Component} from 'react';

class Filter extends Component {
    render() {
        const {size, sort, handleChangeSize, handleChangeSort, count} = this.props

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <span className='h6 text-dark'><strong>{count}</strong> Products Found</span>
                    </div>
                    <div className="col-md-4">
                        <label>
                            <span className='h6 text-dark'>Filter Size</span>
                            <select className='form-control mt-1' value={size} onChange={handleChangeSize}>
                                <option value='' selected>ALL</option>
                                <option value='x'>XS</option>
                                <option value='s'>S</option>
                                <option value='m'>M</option>
                                <option value='l'>L</option>
                                <option value='xl'>XL</option>
                                <option value='xxl'>XXL</option>
                            </select>
                        </label>
                    </div>
                     <div className="col-md-4">
                        <label>
                            <span className='h6 text-dark'>Order By</span>
                            <select className='form-control mt-1' value={sort} onChange={handleChangeSort}>
                                <option value='' disabled selected>Select</option>
                                <option value='lowest'>Lowest To highest</option>
                                <option value='highest'>Highest To Lowest</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;
