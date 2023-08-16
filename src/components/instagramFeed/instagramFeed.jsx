export async function Instagram() {
    var url = "https://graph.instagram.com/me/media";
    var fields = "?fields=media_type,media_url,caption,permalink&access_token=";
    var access_token =
        "IGQWROSG5kRndCaEFBR3Uza1oxRnNRNHpzV1BsaGVwRTN4bjg1eTlLamVyLTZA3YmItUE92WWJwekdYV0lCdUoyZAlFaQ0RzRmtqLXpyQkFhWWhOVENDOTE1YlJIQ1JualVtYjFoVGJOWXVrNmhRQm9DOC0yU3V5RkEZD";

    var urlFetch = url + fields + access_token;

    fetch(urlFetch)
        .catch((error) => console.error(error))
        .then((response) => response.json())
        .then((arrayData) => function1(arrayData));

    let function1 = (arrayData) => {
        let html = "";
        arrayData.data.map((itemArray) => function2(itemArray));

        function function2(itemArray2) {
            let htmlDemo1 = "";
            htmlDemo1 += `<img src="${itemArray2.media_url}">`;
            htmlDemo1 += `
          <a class="icon-instagram" href="${itemArray2.permalink}" target="_blank" rel="noopener noreferrer">
          </a>
          `;

            if (itemArray2.media_type === "IMAGE") {
                let item_caption = itemArray2.caption;
                function funcCaption() {
                    // ========== url... ==========
                    if (item_caption) {
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        // Find all matches
                        const urlMatches = item_caption.match(urlRegex);

                        if (urlMatches && urlMatches.length > 0) {
                            htmlDemo1 += `
                      <a class="icon-shopping-cart" href="${urlMatches[0]}" target="_blank" rel="noopener noreferrer">
                      </a>
                    `;
                        }

                        //   console.log(urlMatches[2]);
                        // ========== url. ==========
                        // ========== hashtag... ==========

                        // Regular expression to match hashtags
                        const hashtagRegex = /#(\w+)/g;
                        // Find all matches
                        const hashMatches = item_caption.match(hashtagRegex);
                        // Log each extracted hashtag separately
                        hashMatches.forEach((match) => {
                            const matchSlice = match.slice(1);
                        });

                        const lines = item_caption.split("\n");
                        const title = lines[0];

                        // Output: "Title rhinoceros"
                        console.log(title);
                        htmlDemo1 += `
              <p class="title">${title}</P>
              `;

                        // ========== title. ==========
                        // ========== content... ==========

                        // Remove the link
                        const linkRemoved = item_caption.replace(
                            /https?:\/\/\S+/g,
                            ""
                        );

                        // Remove the hashtag
                        const hashtagRemoved = linkRemoved.replace(/#\S+/g, "");

                        // console.log(hashtagRemoved);
                        // ========== content. ==========
                    }
                }
                funcCaption();
                // html += `
                // <p>${item_caption}</p>
                // `;
                let aside = document.createElement("aside");
                aside.innerHTML = htmlDemo1;
                aside.classList.add("imgContainer"); // Add the class to the aside element
                let mainContainer = document.querySelector(".mainContainer");
                mainContainer.insertAdjacentHTML("beforeend", aside.outerHTML);
            }
        }
        // mainContainer.insertAdjacentHTML("beforeend", html);
    };
}
