import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props)
    }

    hadleNewsSubmit = (event) => {

        event.preventDefault()

        this.props.onSearch(event.target.elements['search'].value)
    }

    render() {
        return (
            <form className='d-flex' onSubmit={this.hadleNewsSubmit}>
                <div className='flex-grow-1'>
                    <input type="text" className='form-control' placeholder='Search News' name='search'></input>
                </div>

                <div style={{ width: '120px' }} className='d-grid grad-2 ms-3'>
                    <button className='btn btn-gradient p-1,8 mb-2 bg-primary text-white d-block' type='submit'>
                        Buscar
                    </button>
                </div>
            </form>

        );
    }
}

export default SearchBox;