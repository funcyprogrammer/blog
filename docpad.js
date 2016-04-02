var docpadConfig = {

	documentPaths: ['render'],

	collections: {
		posts: function() {
			var documents = this.getCollection("documents");
			var sortDescDate = [{ date: -1 }];
			var typeEqualsPost = { type: { $eq: "post" }};

			var postList = documents.findAllLive(typeEqualsPost, sortDescDate);

			postList.on("add", function(model) {
				model.setMetaDefaults({ layout: "layout", type: "post" });
			});

			return postList;
		}
	},
	plugins: {
		ghpages: {
			deployBranch: 'master',
			deployRemote: 'pages'
		}
	}
}

module.exports = docpadConfig;
