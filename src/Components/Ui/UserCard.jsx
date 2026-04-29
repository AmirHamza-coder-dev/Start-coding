const UserCard = ({ user }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 bg-white shadow-lg rounded-2xl p-5  items-center gap-7">
      {/* ================ Image ============== */}
      <img
        src={`/ProductCard_img/card${user.id}.png`}
        alt="user"
        className="w-20 h-20 rounded-full object-cover"
      />

      {/* ==================== Info ===============*/}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>

        <p className="text-sm text-gray-500">@{user.username}</p>

        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-600">{user.phone}</p>
        <p className="text-sm text-gray-600">{user.website}</p>

        {/* <p className="text-sm text-gray-600">{user.company}</p> */}


  
      </div>
    </div>
  );
};

<<<<<<< HEAD

export default UserCard;


=======
export default UserCard;
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
