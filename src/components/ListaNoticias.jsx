import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'

export default function ListaNoticias(props) {

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 6
    const pageVisited = pageNumber * usersPerPage

    const paginatedchange = Math.ceil(props.articles.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (

        <div className='mt-3'>
            {props.isLoading ? <div className="loadingg">
                <img src="/loadin.svg" />

            </div> : null}

            {props.isLoading == false && props.articles.length == 0 ?
                <div style={{ textAlign: "center", marginTop: '10vh' }}>
                    <h2>No news relacionated to your search</h2>
                </div> : null}
            <div className="row">
                {
                    props.articles.slice(pageVisited, pageVisited + usersPerPage)
                        .map(item => {

                            return (
                                <div className="col-md-6">
                                    <img src={item.urlToImage ?? '/predeterminada.jpg'} class="card-img-top" alt={item.title} />

                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.content}</p>

                                        </div>
                                        <div className="card-body">
                                            <a href={item.url} target='_blank' class="btn btn-sucess p-3 mb-2 bg-success text-white">Show more details...</a>
                                            <p>Author: {item.author ?? 'Rosario Reyes'}</p>
                                            <p>Posted: {item.publishedAt}</p>
                                        </div>
                                    </div>

                                </div>

                            )

                        })
                }
                <div className="pagination justify-content-center mt-4">
                    <ReactPaginate color="sucess" previousLabel={"Previous"} nextLabel={"Next"} pageCount={paginatedchange}
                        onPageChange={changePage} containerClassName={"btnPagination"} previousLinkClassName={"previusBttn"}
                        nextLinkClassName={"nextBttn"} disabledClassName={"paginationDisabled"} activeClassName={"paginationActive"}
                        className="nav" />
                </div>
            </div>

        </div>
    )
}

