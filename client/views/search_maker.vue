<template>
  <div>
    {{ PrintSearchResult() }}
    <textarea v-model="message" style="width: 100%; height: 500px"></textarea>
  </div>
</template>

<script>
import SongData from "./song_data.js";
import ArchiveData from "./archive_data.js";

export default {
  name: "SearchData",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    PrintSearchResult: function () {
      var resultString = "";

      resultString += "const SearchData = new Map()\n\n";

      SongData.forEach(function (value, key) {
        resultString += "SearchData.set('";
        resultString += key.replace('\'', '\\\'');
        resultString += "', ";

        var resultArray = [];
        ArchiveData.forEach(function (archive, index) {
          archive["setlist"].forEach(function (entry) {
            if (entry["song"] === value["title"]) {
              resultArray.push(index);
            }
          });
        });

        resultString += "[" + resultArray + "])" + "\n";
      });

      resultString += "\nexport default SearchData";

      this.message = resultString;
    }
  },
  components: {},
};
</script>
