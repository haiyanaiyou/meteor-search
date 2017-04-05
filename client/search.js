Template.search.onCreated(function searchOnCreated(){
	var Template=Template.instance();
	template.searchQuery=new ReactiveVar();
	template.searching=new ReactiveVar(false);
	template.autorun(function(){
		template.subscribe('books',template.searchQuery.get(),()=>{
			setTimeout(()=>{
				template.searching.set(false);
			},300);
		});
	});
});