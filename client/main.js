import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.search.helpers({
	searching:function(){
		var isSearching=Template.instance().searching.get();
		return isSearching;
	},
	query:function(){
		var qry=Template.instance.ser
	}
});