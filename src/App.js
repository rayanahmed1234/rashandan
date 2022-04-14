import React, { Component } from "react";
import "./App.css";
import Items from "./Items";
import Navbar from "./Navbar";
import HeadItemList from "./HeadItemList";
import AddNew from "./AddNew";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import Settings from "./Settings";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // lstofobjsofitems:{Dairy:[],FruitsVeggies:[],Snacks:[],Spices:[],Other:[]},
      itemnames: [],
      lstofobjsofitems: [],
      lstofitemsdone: [],
      check: false,
      searchvalue: "",
      name: "",
      category: "",
      quantity: "",
      qunit: "units",
      // type: 'text',
      route: "login",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ itemnames: users }));
  }

  AddOnItemlst = (event) => {
    if (
      this.state.name === "" ||
      this.state.quantity === "" ||
      this.state.quantity <= 0
    ) {
      alert("Wrong Entry, Please check your entry again!");
    } else {
      const cat = this.state.category;
      this.state.lstofobjsofitems.push({
        name: " " + this.state.name + " ",
        quantity: `${this.state.quantity} ${this.state.qunit}`,
      });
      this.setState({ lstofobjsofitems: this.state.lstofobjsofitems });
      // document.querySelector("form").classList.toggle("hidden")
      this.setState({ name: "", quantity: "" });
      // document.querySelector("#enteritem").classList.toggle("hidden")
      this.Clearform();
    }
  };
  Clearform = (event) => {
    const form = document.querySelector("form");
    form.children[0].value = "";
    form.children[2].children[0].value = "";
  };
  Onnamechange = (event) => {
    this.setState({ name: event.target.value });
  };
  Oncatchange = (event) => {
    this.setState({ category: event.target.value });
    // console.log(event.target.value);
  };
  Onquachange = (event) => {
    this.setState({ quantity: event.target.value });
  };
  Onunitchange = (event) => {
    this.setState({ qunit: event.target.value });
  };
  Onsearchchange = (event) => {
    this.setState({ searchvalue: event.target.value });
  };
  RemoveItem = (event) => {
    const button = event.target;
    const maindiv = button.parentElement.parentElement.children[2].textContent;
    const snodiv = button.parentElement.parentElement.children[1].textContent;
    const listofobj = this.state.lstofobjsofitems;
    const lstdone = this.state.lstofitemsdone;
    for (let i = 0; i < listofobj.length; i++) {
      if (maindiv === listofobj[i].name && snodiv - 1 === i) {
        listofobj.splice(i, 1);
        this.setState({ lstofobjsofitems: listofobj });
        break;
      }
    }
    for (let i = 0; i < lstdone.length; i++) {
      if (maindiv === lstdone[i].name && snodiv - 1 === i) {
        lstdone.splice(i, 1);
        this.setState({ lstofitemsdone: lstdone });
        break;
      }
    }
  };

  itemdown = (event) => {
    const checkbox = event.target;
    const name = checkbox.parentElement.children[2].textContent;
    const snodiv = checkbox.parentElement.children[1].textContent;
    const listofobj = this.state.lstofobjsofitems;
    // this.setState({check:false})
    const lstdone = this.state.lstofitemsdone;
    for (let i = 0; i < listofobj.length; i++) {
      if (name === listofobj[i].name && snodiv - 1 === i) {
        const tolast = listofobj.splice(i, 1)[0];
        lstdone.push(tolast);
        // console.log(listofobj);
        // listofobj.splice(listofobj.length,1,tolast)
        this.setState({ lstofobjsofitems: listofobj });
        // this.setState({check:true})
        break;
      }
    }
  };

  // Showform = (event) => {
  //   document.querySelector("form").classList.toggle("hidden")
  //   document.querySelector("#enteritem").classList.toggle("hidden")
  // }
  showsearchbar = (event) => {
    document.querySelector("#searchbar").classList.toggle("hidden");
    document.querySelector("#searchicon").classList.toggle("hidden");
    document.querySelector("#searchbar").focus();
  };
  onfocusdate = (event) => {
    this.setState({ type: "date" });
  };
  onblurdate = (event) => {
    this.setState({ type: "text" });
  };
  onfocussearch = (event) => {};
  onblursearch = (event) => {
    document.querySelector("#searchbar").classList.add("hidden");
    document.querySelector("#searchicon").classList.remove("hidden");
  };
  OnRouteChange = (route) => {
    this.setState({ route: route });
  };

  // Render ************************************************

  render() {
    const items = this.state.lstofobjsofitems;
    const filtereditems = items.filter((item) => {
      let itemname = item.name.toLowerCase();
      if (itemname.includes(this.state.searchvalue.toLowerCase())) {
        return item;
      }
      return null;
    });
    const filtereddone = this.state.lstofitemsdone.filter((item) => {
      let itemname = item.name.toLowerCase();
      if (itemname.includes(this.state.searchvalue.toLowerCase())) {
        return item;
      }
      return null;
    });
    // console.log("app", this.state.itemnames);

    let filterednames;
    if (this.state.name.length > 0) {
      filterednames = this.state.itemnames.filter((item) => {
        let itemname = item.name.toLowerCase();
        if (itemname.includes(this.state.name.toLowerCase())) {
          return item;
        } else if (!this.state.name) {
          return null;
        }
        return null;
      });
    } else {
      filterednames = [];
    }

    const route = this.state.route;
    if (route === "login") {
      return <Login OnRouteChange={this.OnRouteChange} />;
    }
    if (route === "signup") {
      return <Signup OnRouteChange={this.OnRouteChange} />;
    }
    if (route === "settings") {
      return <Settings OnRouteChange={this.OnRouteChange} />;
    }
    if (route === "profile") {
      return <Profile OnRouteChange={this.OnRouteChange} />;
    }
    if (route === "main") {
      return (
        <div className="bg-[#f4ebce] h-[1000vh]">
          <Navbar OnRouteChange={this.OnRouteChange} route={route} />
          <HeadItemList
            iconclick={this.showsearchbar}
            SearchChange={this.Onsearchchange}
            onfocus={this.onfocusdate}
            onblur={this.onblurdate}
            onblursearch={this.onblursearch}
            onfocussearch={this.onfocussearch}
            type={this.state.type}
          />
          <AddNew
            newitem={this.AddOnItemlst}
            namechange={this.Onnamechange}
            quachange={this.Onquachange}
            unitchange={this.Onunitchange}
            filterednames={filterednames}
            // formshow={this.Showform}
            formclear={this.Clearform}
            currentItem={this.state.name}
            setItem={(item) => this.setState({ name: item })}
          />
          <Items
            // items={this.state.lstofobjsofitems}
            itemremove={this.RemoveItem}
            items={filtereditems}
            doneitems={filtereddone}
            itemdown={this.itemdown}
            check={this.state.check}
            setCheck={(val) => this.setState({ check: val })}
          />
        </div>
      );
    }
  }
}
export default App;
