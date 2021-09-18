import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVisitors } from './action'
import moment from 'moment'
class VisitorDetails extends Component {

    state = {
        visitors: [],
        query: '',
        loading: 'loading.....'
    }

    // getting the existing Visitors
    componentWillMount() {
        this.props.dispatch(getVisitors())
    }

    // // show visitors
    // showVisitors = (visitors) => (
    //     visitors.visitors ?
    //         visitors.visitors.map(visitor => (
    //             <tr key={visitor._id}>
    //                 <td>{visitor.name}</td>
    //                 <td>{visitor.email}</td>
    //                 <td>{visitor.phone}</td>
    //                 <td>{moment(visitor.checkIn).format('h:mm a, MMMM Do YYYY')}</td>
    //                 <td>{visitor.purpose}</td>
    //                 <td>{visitor.status}</td>
    //                 <td>{visitor.visitorHost}</td>
    //                 <td>{(visitor.checkout)}</td>
    //             </tr>
    //         ))
    //         : null
    // )

    // update query if a string is searched
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    // Clear query when nothing is searched
    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        // Assign our array of data of visitors into one variable
        let allvisitors = this.props.visitors.visitors
        console.log(allvisitors);
        const { query } = this.state

        // Sow Visitors 
        const showingVisitors = query === '' ? allvisitors :
            allvisitors.filter((v) => (
                v.name.toLowerCase().includes(query.toLowerCase())
            ))
        return (
            <div className="container">
                <input
                    className="search-contacts"
                    type="text"
                    value={query}
                    placeholder="Search by Name"
                    onChange={(event) => this.updateQuery(event.target.value)}
                />
                <h1 className="tableHeading"> Visitors List</h1>

                <table className="visitors">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Check In</th>
                            <th>Purpose Of Visit</th>
                            <th>Status</th>
                            <th>Visitor's Host</th>
                            <th>Check Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.showVisitors(visitors)} */}
                        {/* Show Visitors and if data isnot fetched from server yet, 
                        display loading instead of showing up error*/}
                        {showingVisitors ?
                            showingVisitors.map(visitor => (
                                <tr key={visitor._id}>
                                    <td>{visitor.name}</td>
                                    <td>{visitor.email}</td>
                                    <td>{visitor.phone}</td>
                                    <td>{moment(visitor.checkIn).format('h:mm a, MMMM Do YYYY')}</td>
                                    <td>{visitor.purpose}</td>
                                    <td>{visitor.status}</td>
                                    <td>{visitor.visitorHost}</td>
                                    <td>{visitor.checkout ? moment(visitor.checkout).format('h:mm a, MMMM Do YYYY') :
                                        null
                                    }</td>
                                </tr>
                            )) : this.state.loading}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        visitors: state.visitors
    }
}

export default connect(mapStateToProps)(VisitorDetails)