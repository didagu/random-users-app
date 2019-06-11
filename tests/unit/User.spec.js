import { expect } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import User from "@/views/User.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

const user = {
  account_age: 15,
  address: "6286 bağdat cd, 62680 adıyaman",
  age: 64,
  country: "TR",
  dob: "21/02/1955",
  email: "esat.avan@example.com",
  full_picture: "https://api.adorable.io/avatars/500/crazytiger891",
  gender: "male",
  id: 0,
  name: "esat avan",
  phone_number: "(339)-006-9744",
  registration_date: "05/11/2003",
  thumbnail: "https://api.adorable.io/avatars/150/crazytiger891",
  timezone: "+4:00, Abu Dhabi, Muscat, Baku, Tbilisi"
};

const getters = {
  getUserById: () => user
};

const store = new Vuex.Store({
  getters
});

const factory = () => {
  return mount(User, {
    store,
    localVue
  });
};

describe("User.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = factory();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("computes user data correctly from store", () => {
    expect(wrapper.vm.user).to.be.eql(user);
  });

  it("displays user avatar correctly", () => {
    expect(wrapper.find("#user_avatar").attributes("src")).to.be.eql(
      user.thumbnail
    );
  });

  it("displays user name correctly", () => {
    expect(wrapper.find("#user_name").text()).to.be.eql(user.name);
  });

  it("displays user gender correctly", () => {
    expect(wrapper.find("#user_gender").text()).to.be.eql(user.gender);
  });

  it("displays user date of birth correctly", () => {
    expect(wrapper.find("#user_dob").text()).to.be.eql(user.dob);
  });

  it("displays user age correctly", () => {
    expect(parseInt(wrapper.find("#user_age").text())).to.be.eql(user.age);
  });

  it("displays user address correctly", () => {
    expect(wrapper.find("#user_address").text()).to.be.eql(user.address);
  });

  it("displays user country correctly", () => {
    expect(wrapper.find("#user_country").text()).to.be.eql(user.country);
  });

  it("displays user timezone correctly", () => {
    expect(wrapper.find("#user_timezone").text()).to.be.eql(user.timezone);
  });

  it("displays user email correctly", () => {
    expect(wrapper.find("#user_email").text()).to.be.eql(user.email);
  });

  it("displays user phone number correctly", () => {
    expect(wrapper.find("#user_phone_number").text()).to.be.eql(
      user.phone_number
    );
  });

  it("displays user registration date correctly", () => {
    expect(wrapper.find("#user_registration_date").text()).to.be.eql(
      user.registration_date
    );
  });

  it("displays user account age correctly", () => {
    expect(parseInt(wrapper.find("#user_account_age").text())).to.be.eql(
      user.account_age
    );
  });
});
