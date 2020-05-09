function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import { Base } from "./Base";
/**
 * As a Flex container. Pass continer styles. 
 * Will pass Flex child styles onto Base.
 */

export function Flex(_ref) {
  var children = _ref.children,
      style = _ref.style,
      direction = _ref.direction,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      wrap = _ref.wrap,
      gap = _ref.gap,
      rest = _objectWithoutProperties(_ref, ["children", "style", "direction", "justifyContent", "alignItems", "wrap", "gap"]);

  return /*#__PURE__*/React.createElement(Base, _extends({}, rest, {
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: "flex",
      justifyContent: justifyContent,
      flexDirection: direction,
      alignItems: alignItems,
      flexWrap: wrap,
      gap: gap
    })
  }), children);
}
Flex.propTypes = {
  alignItems: PropTypes.oneOf(["stretch", "flex-start", "flex-end", "center"]),
  direction: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"]),
  justifyContent: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "normal"]),
  wrap: PropTypes.oneOf(["wrap", "no-wrap", "wrap-reverse"]),
  gap: PropTypes.number
};