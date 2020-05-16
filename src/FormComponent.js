import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Age"
        />
        <br />

        {/* Create radio buttons for gender here */}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        {/* Create select box for location here */}
        <select
          value={this.state.destination}
          name="destination"
          onChange={this.handleChange}
        >
          <option value="">--Please Choose a Destination--</option>
          <option value="germany">Germany</option>
          <option value="norway">Norway</option>
          <option value="south pole">South Pole</option>
          <option value="north pole">North Pole</option>
        </select>
        <br />

        {/* Create check boxes for dietary restrictions here */}
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.isVegan}
          />{" "}
          Vegan?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.isKosher}
          />{" "}
          Kosher?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={this.handleChange}
            checked={this.state.isLactoseFree}
          />{" "}
          Lactose Free?
        </label>

        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {this.state.firstName} {this.state.lastName}
      </p>
      <p>Your age: {this.state.age}</p>
      <p>Your gender: {this.state.gender}</p>
      <p>Your destination: {this.state.destination}</p>
      <p>
        Your dietary restrictions: <br />
        Vegan: {this.state.isVegan ? "Yes" : "No"} <br />
        Kosher: {this.state.isKosher ? "Yes" : "No"} <br />
        Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"} <br />
      </p>
    </main>
  );
}

export default FormComponent;
