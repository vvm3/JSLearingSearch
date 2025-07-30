const users = [
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Rahul Sharma",
    address: "123 MG Road, Pune",
    mobile: "9876543210",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Priya Verma",
    address: "56 Park Avenue, Delhi",
    mobile: "9123456780",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Amit Singh",
    address: "89 Civil Lines, Lucknow",
    mobile: "9098765432",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Sneha Kapoor",
    address: "45 Marine Drive, Mumbai",
    mobile: "9812345678",
  },
  {
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Vikram Malhotra",
    address: "12 Connaught Place, Delhi",
    mobile: "9876501234",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Neha Gupta",
    address: "78 Park Street, Kolkata",
    mobile: "9123459876",
  },
  {
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Arjun Mehta",
    address: "34 Residency Road, Bangalore",
    mobile: "9090909090",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Kavya Reddy",
    address: "67 Banjara Hills, Hyderabad",
    mobile: "9001234567",
  },
];



const container = document.getElementById("userContainer");
let inp = document.querySelector("#inp");

function showUser(arr) {
  // Clear previous cards
  container.textContent = "";

  // If no user matches, show a message
  if (arr.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No users found";
    msg.style.color = "red";
    container.appendChild(msg);
    return;
  }

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.img;
    img.alt = user.name;

    const name = document.createElement("h3");
    name.textContent = user.name;

    const address = document.createElement("p");
    address.textContent = "📍 " + user.address;

    const mobile = document.createElement("p");
    mobile.textContent = "📞 " + user.mobile;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(mobile);

    container.appendChild(card);
  });
}

// Initial load
showUser(users);

inp.addEventListener("input", () => {
  const query = inp.value.trim().toLowerCase();

  if (query === "") {
    // If input is cleared, show all users
    showUser(users);
  } else {
    const newU = users.filter((user) =>
      user.name.toLowerCase().startsWith(query)
    );
    showUser(newU);
  }
});
