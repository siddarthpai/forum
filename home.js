import "./styles.css";

const homeComponent = document.createElement("div");
homeComponent.classList.add("container");
homeComponent.innerHTML = `


  <body>
    <header>
      <!--NavBar Section-->
      <div class="navbar">
        <nav class="navigation hide" id="navigation">
          <span class="close-icon" id="close-icon" onclick="showIconBar()"
            ><i class="fa fa-close"></i
          ></span>
          <ul class="nav-list">
            <li class="nav-item"><a href="forums.html">Home</a></li>
            <li class="nav-item"><a href="posts.html">Posts</a></li>
            <li class="nav-item"><a href="detail.html">Forums</a></li>
          </ul>
        </nav>
        <a class="bar-icon" id="iconBar" onclick="hideIconBar()"
          ><i class="fa fa-bars"></i
        ></a>
        <div class="brand">ThinkTalks</div>
      </div>
      <!--SearchBox Section-->
      <div class="search-box">
        <div>
          <select name="" id="">
            <option value="Everything">Everything</option>
            <option value="Titles">Titles</option>
            <option value="Descriptions">Descriptions</option>
          </select>
          <input type="text" name="q" placeholder="search ..." />
          <button><i class="fa fa-search"></i></button>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="subforum">
        <div class="subforum-title">
          <h1>General Information</h1>
        </div>
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
      </div>
      <!--More-->

      <div class="subforum">
        <div class="subforum-title">
          <h1>General Information</h1>
        </div>
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
        <hr class="subforum-devider" />
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
        <hr class="subforum-devider" />
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
        <hr class="subforum-devider" />
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
        <hr class="subforum-devider" />
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
      </div>

      <div class="subforum">
        <div class="subforum-title">
          <h1>General Information</h1>
        </div>
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
        <hr class="subforum-devider" />
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
        <hr class="subforum-devider" />
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
        <hr class="subforum-devider" />
        <div class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#">Description Title</a></h4>
            <p>
              Description Content: let's try to be cool, otherwise,w at 'sthe
              point in libing together with people youdont' live.
            </p>
          </div>
          <div class="subforum-stats subforum-column center">
            <span>24 Posts | 12 Topics</span>
          </div>
          <div class="subforum-info subforum-column">
            <b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br />on
            <small>12 Dec 2020</small>
          </div>
        </div>
      </div>
      <!---->
    </div>

    <!-- Forum Info -->
    <div class="forum-info">
      <div class="chart">
        MyForum - Stats &nbsp;<i class="fa fa-bar-chart"></i>
      </div>
      <span
        ><u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.</span
      ><br />
      <span
        >Latest post: <b><a href="">Random post</a></b> on Dec 15 2021 By
        <a href="">RandomUser</a></span
      >.<br />
      <span>Check <a href="">the latest posts</a> .</span><br />
    </div>

  </body>


`;

// Link the main.js and styles.css
const mainScript = document.createElement("script");
mainScript.src = "main.js";

const stylesLink = document.createElement("link");
stylesLink.rel = "stylesheet";
stylesLink.href = "styles.css";

// Append the components and links to the document
document.head.appendChild(mainScript);
document.head.appendChild(stylesLink);
document.body.appendChild(homeComponent);
