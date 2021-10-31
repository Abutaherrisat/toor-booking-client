import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Myorder.css'

const Myorder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/getOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])
    console.log(orders);
    const handleDelete = (e, id) => {
        if (window.confirm("Are you sure! Do you want to delete this order?")) {
            const url = `http://localhost:5000/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    alert('Order has been deleted successfully!');
                    e.target.parentNode.parentNode.style.display = 'none';
                })
        }

    }
    const handleChange = (e) => {
        setStatus(e.target.value);

    }

    const handleUpdate = (order, id) => {
        order.status = status;
        if (window.confirm("Are you sure! Do you want to update this order?")) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ order })
            })
                .then(res => res.json())
                .then(data => alert("Order status updated successfully"));
        }
    }
    return (

        <div style={{height:"90vh"}}>
            <div className="table-responsive-sm">
                <table className="table table-bordered">
                    <tr>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {orders.map(order => <tr>
                        <td>{order.order.firstName}</td>
                        <td>{order.email}</td>
                        <td>
                            <select onChange={handleChange}>
                                <option value="select" disabled selected>Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="approve">Approved</option>
                            </select>
                        </td>
                        <td>
                            <button style={{ backgroundColor: 'red', color: 'white' }} onClick={(e) => handleDelete(e, order._id)} className="btn me-1 mt-1">Delete</button>
                            <button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleUpdate(order, order._id)} className="btn me-1 mt-1">Update</button>
                        </td>
                    </tr>)}
                </table>
            </div>
        </div>
    );
};

export default Myorder;