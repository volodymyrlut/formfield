exports.FormField = React.createClass({
  getInitialState: function(){
    return {
      className: '',
      type: 'text',
      name: '',
      value: '',
      validations: []
    };
  },

  componentDidMount: function(){
    for(var key in this.state){
      if(this.props[key]) this.setState({ [key] : this.props[key] });
    }
  },
  handleChange: function(e){
    this.setState({value: e.target.value});
    this.validate();
  },
  validate: function(){
    var valid = true;
    var value = this.state.value;
    this.state.validations.map((validator) => {
      valid = valid && this.validators[validator](value);
    });
    if (valid) {
      this.setState({valid: true});
      this.setState({ className : this.state.className.replace(/\b invalid\b/, "") });
    } else {
      this.setState({valid: false});
      this.setState({ className : this.state.className.replace(/\b invalid\b/, "") + " invalid" });
    }
  },
  validators: {
    isDefaultRequiredValue: function (value) {
      return value === undefined || value === '';
    },
    isExistyCommon: function (value) {
      return value !== null && value !== undefined;
    },
    isEmptyCommon: function (value) {
      return value === '';
    },
    isFull: function(value){
      return value !== '';
    },
    isExisty: function (value) {
      return this.isExistyCommon(value);
    },
    matchRegexpCommon: function (value, regexp) {
      return !this.isEmptyCommon(value) && regexp.test(value);
    },
    isUndefined: function (value) {
      return value === undefined;
    },
    isEmptyString: function (value) {
      return this.isEmptyCommon(value);
    },
    isEmail: function (value) {
      return this.matchRegexpCommon(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
    },
    isUrl: function (value) {
      return this.matchRegexpCommon(value, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
    },
    isTrue: function (value) {
      return value === true;
    },
    isFalse: function (value) {
      return value === false;
    },
    isNumeric: function (value) {
      if (typeof value === 'number') {
        return true;
      }
      return this.matchRegexpCommon(value, /^[-+]?(?:\d*[.])?\d+$/);
    },
    isAlpha: function (value) {
      return this.matchRegexpCommon(value, /^[A-Z]+$/i);
    },
    isAlphanumeric: function (value) {
      return this.matchRegexpCommon(value, /^[0-9A-Z]+$/i);
    },
    isInt: function (value) {
      return this.matchRegexpCommon(value, /^(?:[-+]?(?:0|[1-9]\d*))$/);
    },
    isFloat: function (value) {
      return this.matchRegexpCommon(value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/);
    },
    isWords: function (value) {
      return this.matchRegexpCommon(value, /^[A-Z\s]+$/i);
    },
    isSpecialWords: function (value) {
      return this.matchRegexpCommon(value, /^[A-Z\s\u00C0-\u017F]+$/i);
    },
    isLength: function (value, length) {
      return !this.isExistyCommon(value) || this.isEmptyCommon(value) || value.length === length;
    },
    equals: function (value, eql) {
      return !this.isExistyCommon(value) || this.isEmptyCommon(value) || value == eql;
    },
    equalsField: function (value, field) {
      return value == values[field];
    },
    maxLength: function (value, length) {
      return !this.isExistyCommon(value) || value.length <= length;
    },
    minLength: function (value, length) {
      return !this.isExistyCommon(value) || this.isEmptyCommon(value) || value.length >= length;
    }
  },

  render: function(){
    return(
      <input type={this.state.type} name={this.state.name} onChange={this.handleChange} className={this.state.className} onBlur={this.validate} value={this.state.value}/>
    )
  }

});
