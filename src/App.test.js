import { create } from "react-test-renderer";
import React from "react";
import App from "./App.js"
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe('device module',()=>{
  let wrapper;
  let mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<App submit={mockSubmit} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should call setState on title", () => {
      const mockEvent = {
        target: {
          name: "text",
          value: "test"
        }
      };
      function formatTime(){
        let now = new Date();
        return (now.getHours()<10?"0"+now.getHours():now.getHours()) + ":" + (now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()) + ":" + (now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds())
      }
      const expected = {
        text: "test",
        currenttime: formatTime(),
        senttime:"",
        displaylink:"https://iot-display.herokuapp.com/display/get/",
        displayid:""
       
      };
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });

})