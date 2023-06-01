import Pagination from "react-js-pagination";

const Pagination = () => {
    return (
        <>
            <Pagination
                activePage={1}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                // onChange={this.handlePageChange.bind(this)}
            />
        </>
    );
}

export default Pagination;