!function n(r,t,e){function o(u,f){if(!t[u]){if(!r[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var l=t[u]={exports:{}};r[u][0].call(l.exports,function(n){var t=r[u][1][n];return o(t?t:n)},l,l.exports,n,r,t,e)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<e.length;u++)o(e[u]);return o}({1:[function(n,r,t){var e=n("uniq"),o=[1,2,2,3,4,5,5,5,6];console.log(o),console.log(e(o))},{uniq:2}],2:[function(n,r,t){"use strict";function e(n,r){for(var t=1,e=n.length,o=n[0],i=n[0],u=1;e>u;++u)if(i=o,o=n[u],r(o,i)){if(u===t){t++;continue}n[t++]=o}return n.length=t,n}function o(n){for(var r=1,t=n.length,e=n[0],o=n[0],i=1;t>i;++i,o=e)if(o=e,e=n[i],e!==o){if(i===r){r++;continue}n[r++]=e}return n.length=r,n}function i(n,r,t){return 0===n.length?n:r?(t||n.sort(r),e(n,r)):(t||n.sort(),o(n))}r.exports=i},{}]},{},[1]);
!function r(e,n,o){function t(i,f){if(!n[i]){if(!e[i]){var l="function"==typeof require&&require;if(!f&&l)return l(i,!0);if(u)return u(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=n[i]={exports:{}};e[i][0].call(c.exports,function(r){var n=e[i][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)t(o[i]);return t}({1:[function(r,e,n){var o="Hello World!";console.log(o)},{}]},{},[1]);