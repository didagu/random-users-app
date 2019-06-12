import { expect } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import UsersTable from "@/components/UsersTable.vue";
import BootstrapVue from "bootstrap-vue";
import users from "@/services/data/test_users";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

let rows = users.length;

const factory = () => {
  return mount(UsersTable, {
    propsData: {
      items: users,
      rows
    },
    localVue
  });
};

const randomNumberGenerator = () => {
  return Math.floor(Math.random() * Math.floor(10));
};

describe("UsersTable.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = factory();
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("gets the correct users as props data from parent", () => {
    expect(wrapper.vm._props.items).to.be.eql(users);
  });

  it("gets the correct rows as props data from parent", () => {
    expect(wrapper.vm._props.rows).to.be.eql(rows);
  });

  it("displays the correct number of table fields", () => {
    expect(wrapper.vm.fields.length).to.be.eql(4);
  });

  it("displays the correct number of rows per page", () => {
    expect(wrapper.vm.perPage).to.be.eql(10);
  });

  it("displays random user name correctly", () => {
    let randomNumber = randomNumberGenerator();
    let randomUser = users[randomNumber];
    let tableRow = wrapper.find(`tr[aria-rowindex="${randomNumber + 1}"]`);
    let column = tableRow.find(`td[aria-colindex="1"]`);
    expect(column.text()).to.be.eql(randomUser["name"]);
  });

  it("displays random user gender correctly", () => {
    let randomNumber = randomNumberGenerator();
    let randomUser = users[randomNumber];
    let tableRow = wrapper.find(`tr[aria-rowindex="${randomNumber + 1}"]`);
    let column = tableRow.find(`td[aria-colindex="2"]`);
    expect(column.text()).to.be.eql(randomUser["gender"]);
  });

  it("displays random user age correctly", () => {
    let randomNumber = randomNumberGenerator();
    let randomUser = users[randomNumber];
    let tableRow = wrapper.find(`tr[aria-rowindex="${randomNumber + 1}"]`);
    let column = tableRow.find(`td[aria-colindex="3"]`);
    expect(parseInt(column.text())).to.be.eql(randomUser["age"]);
  });

  it("displays random user address correctly", () => {
    let randomNumber = randomNumberGenerator();
    let randomUser = users[randomNumber];
    let tableRow = wrapper.find(`tr[aria-rowindex="${randomNumber + 1}"]`);
    let column = tableRow.find(`td[aria-colindex="4"]`);
    expect(column.text()).to.be.eql(randomUser["address"]);
  });
});
