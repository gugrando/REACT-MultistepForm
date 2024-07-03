/* eslint-disable react/prop-types */
const UserForm = ({data, updateFieldHandler}) => {
    return (
        <>
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input value={data.name || ''} onChange={(e) => updateFieldHandler('name', e.target.value)} type="text" name="name" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input value={data.email || ''} onChange={(e) => updateFieldHandler('email', e.target.value)} type="email" name="email" id="email" placeholder="Enter your email" required />
            </div>
        </>
    );
}
 
export default UserForm;