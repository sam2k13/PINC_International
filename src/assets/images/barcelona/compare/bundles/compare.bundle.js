webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_compare_scss__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_compare_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_compare_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_pose_viewer_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_error_viewer_js__ = __webpack_require__(131);




const tourName = getParameterByName("tourName");
const versionLeft = getParameterByName("versionLeft");
const versionRight = getParameterByName("versionRight");

function initialize() {
  setupVersionList();
  drawVersionPlots();
}

function setupVersionList() {
  $.post("/getTourVersions", { tourName: tourName }, function (versionList) {
    for (var versionIndex in versionList) {
      let version = versionList[versionIndex];
      let leftVersionButton = document.createElement("a");
      $(leftVersionButton).attr('role', 'button').addClass('btn').html(version);
      $(leftVersionButton).attr('href', `/compare?tourName=${tourName}&versionLeft=${version}&versionRight=${versionRight}`);
      if (version === versionLeft) {
        $(leftVersionButton).addClass('btn-warning');
        $(leftVersionButton).attr('href', `/visualize?tourName=${tourName}&version=${version}`);
        $(leftVersionButton).attr('target', `_blank`);
      } else {
        $(leftVersionButton).addClass('btn-primary');
      }
      $("#leftVersionSelector").append(leftVersionButton);

      let rightVersionButton = document.createElement("a");
      $(rightVersionButton).attr('role', 'button').addClass('btn').html(version);
      $(rightVersionButton).attr('href', `/compare?tourName=${tourName}&versionLeft=${versionLeft}&versionRight=${version}`);
      if (version === versionRight) {
        $(rightVersionButton).addClass('btn-warning');
        $(rightVersionButton).attr('href', `/visualize?tourName=${tourName}&version=${version}`);
        $(rightVersionButton).attr('target', `_blank`);
      } else {
        $(rightVersionButton).addClass('btn-primary');
      }
      $("#rightVersionSelector").append(rightVersionButton);
    }
  });
}

// TODO: Clean this up!!!
function drawVersionPlots() {
  $.post("/getTourResults", { tourName: tourName, versions: [versionLeft, versionRight] }, function (results) {
    console.log(results);
    let leftVersionContainer = $("#leftVersionContainer");
    let rightVersionContainer = $("#rightVersionContainer");

    let leftResultsData = results[versionLeft];
    let rightResultsData = results[versionRight];

    // console.log(results);
    for (let gtIndex in leftResultsData.gt) {

      let gtConfig = {};
      gtConfig.gt = leftResultsData.gt[gtIndex];

      gtConfig.chunks = [];
      gtConfig.colors = [];
      for (let chunkIndex in leftResultsData.chunks) {
        let chunk = leftResultsData.chunks[chunkIndex];
        let gt_chunk_scenes = {};
        let gt_chunk_colors = {};
        for (let scene in chunk) {
          if (chunk[scene][1] == gtIndex) {
            gt_chunk_scenes[scene[0].toLowerCase() + scene.substring(1)] = chunk[scene];
          }
        }

        if (Object.keys(gt_chunk_scenes).length > 2) {
          gtConfig.chunks.push(gt_chunk_scenes);
          gtConfig.colors.push(leftResultsData.chunk_colors[chunkIndex]);
        }
      }

      console.log(gtConfig);

      // DRAW Left Poses
      let leftClusterPose = new __WEBPACK_IMPORTED_MODULE_1__shared_modules_pose_viewer_js__["a" /* PoseViewer */](gtConfig, leftVersionContainer, 500);

      function onInteraction(event) {
        let visibleChunks = [];
        for (var index in event) {
          let chunkData = event[index];
          visibleChunks.push(!chunkData._meta[Object.keys(chunkData._meta)[0]].hidden);
        }
        console.log(visibleChunks);
        leftClusterPose.setVisibleChunks(visibleChunks);
      }

      let leftClusterErrors = new __WEBPACK_IMPORTED_MODULE_2__shared_modules_error_viewer_js__["a" /* ErrorViewer */](gtConfig, leftVersionContainer, 500, onInteraction);
    }

    for (let gtIndex in rightResultsData.gt) {

      let gtConfig = {};
      gtConfig.gt = rightResultsData.gt[gtIndex];

      gtConfig.chunks = [];
      gtConfig.colors = [];
      for (let chunkIndex in rightResultsData.chunks) {
        let chunk = rightResultsData.chunks[chunkIndex];
        let gt_chunk_scenes = {};
        let gt_chunk_colors = {};
        for (let scene in chunk) {
          if (chunk[scene][1] == gtIndex) {
            gt_chunk_scenes[scene[0].toLowerCase() + scene.substring(1)] = chunk[scene];
          }
        }

        if (Object.keys(gt_chunk_scenes).length > 2) {
          gtConfig.chunks.push(gt_chunk_scenes);
          gtConfig.colors.push(rightResultsData.chunk_colors[chunkIndex]);
        }
      }

      // DRAW Left Poses
      let rightClusterPose = new __WEBPACK_IMPORTED_MODULE_1__shared_modules_pose_viewer_js__["a" /* PoseViewer */](gtConfig, rightVersionContainer, 500);

      function onInteraction(event) {
        let visibleChunks = [];
        console.log(event);
        for (var index in event) {
          let chunkData = event[index];
          visibleChunks.push(!chunkData._meta[Object.keys(chunkData._meta)[0]].hidden);
        }
        console.log(visibleChunks);
        rightClusterPose.setVisibleChunks(visibleChunks);
      }

      //let clusterPoses = new PoseViewer()
      let rightClusterErrors = new __WEBPACK_IMPORTED_MODULE_2__shared_modules_error_viewer_js__["a" /* ErrorViewer */](gtConfig, rightVersionContainer, 500, onInteraction);
      // Draw Graph of errors
    }
  });
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function sfmUpdate() {
  window.location.href = "/chunks/?tourName=" + tourName;
}

initialize();

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__two_dee_pose_viewer_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_pose_viewer_scss__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_pose_viewer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_pose_viewer_scss__);

// import { ThreeDeePoseViewer } from './three-dee-pose-viewer.js'


class PoseViewer {

  // appends a plot of the poses with the height specified
  constructor(config, container, height) {
    this.config = config;
    this.container = container;
    this.height = height;
    this.setupElements();
    this.render();
  }

  setVisibleChunks(visibleChunks) {
    this.visibleChunks = visibleChunks;
    this.render();
  }

  render() {
    this.clearContainers();
    this.drawTwoDee();
    this.configControls();
  }

  setupElements() {

    this.poseContainer = document.createElement("div");
    $(this.poseContainer).addClass("pose-viewer");
    $(this.container).append(this.poseContainer);

    // add a controls div to hold the 2D View and 3D view buttons
    this.controlsContainer = document.createElement("div");
    $(this.controlsContainer).addClass("controls");
    $(this.poseContainer).append(this.controlsContainer);

    // add a div to hold the canvases for the 2D and 3D viewer
    this.viewContainer = document.createElement("div");
    $(this.viewContainer).addClass("view");

    $(this.viewContainer).height(this.height);
    $(this.poseContainer).append(this.viewContainer);
  }

  clearContainers() {
    $(this.controlsContainer).html("");
    $(this.viewContainer).html("");
  }

  drawTwoDee() {
    // initialize the 2D viewer in the viewContainer
    // specifify horitontal and vertical axis
    this.xyTwoDeePoseViewer = new __WEBPACK_IMPORTED_MODULE_0__two_dee_pose_viewer_js__["a" /* TwoDeePoseViewer */](this.config, this.viewContainer, 0, 1, this.visibleChunks);
    this.xzTwoDeePoseViewer = new __WEBPACK_IMPORTED_MODULE_0__two_dee_pose_viewer_js__["a" /* TwoDeePoseViewer */](this.config, this.viewContainer, 0, 2, this.visibleChunks);
    this.yzTwoDeePoseViewer = new __WEBPACK_IMPORTED_MODULE_0__two_dee_pose_viewer_js__["a" /* TwoDeePoseViewer */](this.config, this.viewContainer, 1, 2, this.visibleChunks);
    $(this.xyTwoDeePoseViewer.canvas).show();
    $(this.xzTwoDeePoseViewer.canvas).hide();
    $(this.yzTwoDeePoseViewer.canvas).hide();
  }

  configControls() {
    let that = this;

    let view_two_xy = document.createElement("button");
    view_two_xy.innerHTML = "2D View (xy Projection)";
    view_two_xy.addEventListener('click', function () {
      $(".ThreeDeePoseViewer").remove();
      $(that.xyTwoDeePoseViewer.canvas).show();
      $(that.xzTwoDeePoseViewer.canvas).hide();
      $(that.yzTwoDeePoseViewer.canvas).hide();
      that.xyTwoDeePoseViewer.onResize();
    });

    let view_two_xz = document.createElement("button");
    view_two_xz.innerHTML = "2D View (xz Projection)";
    view_two_xz.addEventListener('click', function () {
      $(".ThreeDeePoseViewer").remove();
      $(that.xyTwoDeePoseViewer.canvas).hide();
      $(that.xzTwoDeePoseViewer.canvas).show();
      $(that.yzTwoDeePoseViewer.canvas).hide();
      that.xzTwoDeePoseViewer.onResize();
    });

    let view_two_yz = document.createElement("button");
    view_two_yz.innerHTML = "2D View (yz Projection)";
    view_two_yz.addEventListener('click', function () {
      $(".ThreeDeePoseViewer").remove();
      $(that.xyTwoDeePoseViewer.canvas).hide();
      $(that.xzTwoDeePoseViewer.canvas).hide();
      $(that.yzTwoDeePoseViewer.canvas).show();
      that.yzTwoDeePoseViewer.onResize();
    });

    $(this.controlsContainer).append(view_two_xy);
    $(this.controlsContainer).append(view_two_xz);
    $(this.controlsContainer).append(view_two_yz);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PoseViewer;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(129);


class TwoDeePoseViewer {

  constructor(config, container, horizontalAxis = 1, verticalAxis = 0, visibleChunks = null) {
    //console.log(config);
    // config.gt - { sceneId : [x,y,z] }
    // config.chunks - [{ sceneId: [ [x,y,z], <gt_index>, error ] }]
    // config.colors - ["#fdsf", "#gheh"]
    this.config = config;
    this.container = container;
    this.horizontalAxis = horizontalAxis;
    this.verticalAxis = verticalAxis;
    this.visibleChunks = visibleChunks;
    this.initialize();
  }

  initialize() {

    this.canvas = document.createElement('canvas');
    this.canvas.classList.add("TwoDeePoseViewer");
    this.container.appendChild(this.canvas);
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.initializeViewDimensions();
    this.addEventListeners();
    this.calculateCanvasPositions();
    this.draw();
    console.log(this.container);

    console.log("here now");
  }

  addEventListeners() {
    this.boundResize = evt => this.onResize(evt);
    window.addEventListener("resize", this.boundResize, false);
  }

  onResize() {
    this.clearCanvas();
    this.initializeViewDimensions();
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.draw();
  }

  draw() {
    this.drawAxis();
    this.drawPredictionCircles();
    this.drawGroundTruthCircles();
    this.drawConnectingLines();
    this.drawErrorText();
  }

  initializeViewDimensions() {

    let minHorizontal = 10000000;
    let minVertical = 1000000;

    let maxHorizontal = -1000000;
    let maxVertical = -10000000;

    let averageHorizontal = 0;
    let averageVertical = 0;

    let gtPoses = this.config.gt;
    let chunks = this.config.chunks;

    for (let gtPose in gtPoses) {
      averageHorizontal += gtPoses[gtPose][this.horizontalAxis];
      averageVertical += gtPoses[gtPose][this.verticalAxis];

      // console.log(gtPoses[gtPose]);
      if (gtPoses[gtPose][this.horizontalAxis] < minHorizontal) {
        minHorizontal = gtPoses[gtPose][this.horizontalAxis];
      }
      if (gtPoses[gtPose][this.horizontalAxis] > maxHorizontal) {
        maxHorizontal = gtPoses[gtPose][this.horizontalAxis];
      }

      if (gtPoses[gtPose][this.verticalAxis] < minVertical) {
        minVertical = gtPoses[gtPose][this.verticalAxis];
      }
      if (gtPoses[gtPose][this.verticalAxis] > maxVertical) {
        maxVertical = gtPoses[gtPose][this.verticalAxis];
      }
    }

    averageHorizontal /= Object.keys(gtPoses).length;
    averageVertical /= Object.keys(gtPoses).length;
    //console.log(averageHorizontal, averageVertical);

    // console.log(maxHorizontal, minHorizontal);
    //
    // console.log(maxVertical, minVertical);
    //this.origin = { x : minHorizontal - ((maxHorizontal - minHorizontal) * .1), y : minVertical - ((maxVertical - minVertical) * .1) };

    this.horizontalWidth = (maxHorizontal - minHorizontal) * 1.2;
    this.verticalWidth = (maxVertical - minVertical) * 1.2;

    // if (this.origin.y < minVertical){
    //   this.origin.y = minVertical - (this.verticalWidth * .1);
    // }
    // let ratio = this.container.clientHeight / this.container.clientWidth;
    // let idealVertical = this.horizontalWidth * ratio;
    // if (idealVertical > this.verticalWidth){
    //   this.verticalWidth = idealVertical;
    // }
    // else{
    //   this.horizontalWidth = (1 / ratio) * this.verticalWidth;
    // }

    this.origin = { x: minHorizontal - this.horizontalWidth / 11, y: minVertical - this.verticalWidth / 11 };
    // console.log(this.origin);
    // console.log("width", this.horizontalWidth - (this.horizontalWidth / 11), "height", this.verticalWidth);
    // console.log(maxHorizontal, minHorizontal);
    //
    // console.log(maxVertical, minVertical);
  }

  calculateCanvasPositions() {
    let gtPoses = this.config.gt;
    let chunks = this.config.chunks;

    this.canvasPositions = {};
    this.canvasPositions.gt = {};
    this.canvasPositions.chunkScenes = [];

    for (let sceneId in gtPoses) {
      this.canvasPositions.gt[sceneId.toLowerCase()] = {};
      let gtCanvasPosition = this.canvasPositions.gt[sceneId.toLowerCase()];
      gtCanvasPosition.x = (gtPoses[sceneId][this.horizontalAxis] - this.origin.x) / this.horizontalWidth;
      gtCanvasPosition.y = (gtPoses[sceneId][this.verticalAxis] - this.origin.y) / this.verticalWidth;
      gtCanvasPosition.color = "#777777";
    }

    for (var i = 0; i < chunks.length; i++) {
      let chunkVisible = true;
      if (this.visibleChunks) {
        chunkVisible = this.visibleChunks[i];
      }
      if (chunkVisible) {
        let chunk = chunks[i];
        let chunk_color = this.config.colors[i];

        for (let sceneId in chunk) {
          let sceneCanvasPosition = {};
          //sceneCanvasPosition.error = chunk[sceneId][2];
          sceneCanvasPosition.error = sceneId;
          sceneCanvasPosition.sceneId = sceneId.toLowerCase();
          sceneCanvasPosition.x = (chunk[sceneId][0][this.horizontalAxis] - this.origin.x) / this.horizontalWidth;
          sceneCanvasPosition.y = (chunk[sceneId][0][this.verticalAxis] - this.origin.y) / this.verticalWidth;
          sceneCanvasPosition.color = chunk_color;
          this.canvasPositions.chunkScenes.push(sceneCanvasPosition);
        }
      }
    }
  }

  drawConnectingLines() {
    let ctx = this.canvas.getContext("2d");
    ctx.strokeStyle = '#000000';
    for (var i = 0; i < this.canvasPositions.chunkScenes.length; i++) {
      let position = this.canvasPositions.chunkScenes[i];
      let xPosition = position.x * this.canvas.clientWidth;
      let yPosition = position.y * this.canvas.clientHeight;
      if (this.canvasPositions.gt[position.sceneId]) {
        let endXPosition = this.canvasPositions.gt[position.sceneId].x * this.canvas.clientWidth;
        let endYPosition = this.canvasPositions.gt[position.sceneId].y * this.canvas.clientHeight;
        ctx.beginPath();
        ctx.moveTo(xPosition, yPosition);
        ctx.lineTo(endXPosition, endYPosition);
        ctx.stroke();
      }
    }
  }

  drawPredictionCircles() {
    let ctx = this.canvas.getContext("2d");
    ctx.fillStyle = '#FF8300';
    for (var i = 0; i < this.canvasPositions.chunkScenes.length; i++) {
      let position = this.canvasPositions.chunkScenes[i];
      let xPosition = position.x * this.canvas.clientWidth;
      let yPosition = position.y * this.canvas.clientHeight;
      ctx.beginPath();
      ctx.arc(xPosition, yPosition, 5, 0, 2 * Math.PI, false);
      ctx.fillStyle = position.color;
      ctx.fill();
    }
  }

  drawGroundTruthCircles() {
    let ctx = this.canvas.getContext("2d");
    for (let scene in this.canvasPositions.gt) {
      let position = this.canvasPositions.gt[scene];
      let xPosition = position.x * this.canvas.clientWidth;
      let yPosition = position.y * this.canvas.clientHeight;
      ctx.beginPath();
      ctx.arc(xPosition, yPosition, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = position.color;
      ctx.fill();
    }
  }

  clearCanvas() {
    let ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // grid is drawn as square meters
  drawAxis() {
    let ctx = this.canvas.getContext("2d");
    ctx.strokeStyle = '#D3D3D3';
    // draw horizontal axis
    let currentX = this.origin.x;

    while (currentX < this.origin.x + this.horizontalWidth) {
      let x_percentage = (currentX - this.origin.x) / this.horizontalWidth;
      ctx.beginPath();
      ctx.moveTo(x_percentage * this.canvas.clientWidth, 0);
      ctx.lineTo(x_percentage * this.canvas.clientWidth, this.canvas.clientHeight);
      ctx.stroke();
      currentX += 1000;
    }

    let currentY = this.origin.y;
    while (currentY < this.origin.y + this.verticalWidth) {
      let y_percentage = (currentY - this.origin.y) / this.verticalWidth;
      ctx.beginPath();
      ctx.moveTo(0, y_percentage * this.canvas.clientHeight);
      ctx.lineTo(this.canvas.clientWidth, y_percentage * this.canvas.clientHeight);
      ctx.stroke();

      currentY += 1000;
    }
  }

  drawErrorText() {
    let ctx = this.canvas.getContext("2d");
    ctx.fillStyle = '#000000';
    for (var i = 0; i < this.canvasPositions.chunkScenes.length; i++) {
      let position = this.canvasPositions.chunkScenes[i];
      let xPosition = position.x * this.canvas.clientWidth;
      let yPosition = position.y * this.canvas.clientHeight;

      if (this.canvasPositions.gt[position.sceneId]) {

        let endXPosition = this.canvasPositions.gt[position.sceneId].x * this.canvas.clientWidth;
        let endYPosition = this.canvasPositions.gt[position.sceneId].y * this.canvas.clientHeight;

        let startingY;
        if (yPosition < endYPosition) {
          startingY = yPosition - 15;
        } else {
          startingY = yPosition + 25;
        }

        let startingX = xPosition - 20;
        ctx.font = "12px Arial";
        //let error = parseFloat(position.error).toFixed(2).toString();
        let error = position.error;
        ctx.fillText(error, startingX, startingY);
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TwoDeePoseViewer;


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_error_viewer_scss__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_error_viewer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_error_viewer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
// import { TwoDeePoseViewer } from './two-dee-pose-viewer.js'
// import { ThreeDeePoseViewer } from './three-dee-pose-viewer.js'



class ErrorViewer {

  // appends a plot of the poses with the height specified
  constructor(config, container, height, onInteraction) {
    this.config = config;
    this.container = container;
    this.height = height;
    this.onInteraction = onInteraction;
    this.setupElements();
    this.drawCharts();
    //this.configControls();
  }

  setupElements() {

    this.errorContainer = document.createElement("div");
    $(this.errorContainer).addClass("error-viewer");
    $(this.container).append(this.errorContainer);

    // add a controls div to hold the 2D View and 3D view buttons
    this.controlsContainer = document.createElement("div");
    $(this.controlsContainer).addClass("controls");
    $(this.errorContainer).append(this.controlsContainer);

    // add a div to hold the canvases for the 2D and 3D viewer
    this.viewContainer = document.createElement("div");
    $(this.viewContainer).addClass("view");

    $(this.viewContainer).height(this.height);
    $(this.errorContainer).append(this.viewContainer);
  }

  drawCharts() {

    this.drawLineGraph();

    // initialize the 2D viewer in the viewContainer
    // specifify horitontal and vertical axis
    // this.xyTwoDeePoseViewer = new TwoDeePoseViewer(this.config, this.viewContainer, 0, 1);
    // this.xzTwoDeePoseViewer = new TwoDeePoseViewer(this.config, this.viewContainer, 0, 2);
    // this.yzTwoDeePoseViewer = new TwoDeePoseViewer(this.config, this.viewContainer, 1, 2);
    // $(this.xyTwoDeePoseViewer.canvas).show();
    // $(this.xzTwoDeePoseViewer.canvas).hide();
    // $(this.yzTwoDeePoseViewer.canvas).hide();
  }

  drawLineGraph() {

    let canvas = document.createElement("canvas");
    canvas.height = this.container.clientHeight;
    canvas.witdh = this.container.clientWidth;

    let ctx = canvas.getContext("2d");
    let sceneIds = [];
    for (let id in this.config.gt) {
      sceneIds.push(id);
    }

    let datasets = [];

    for (var i = 0; i < this.config.chunks.length; i++) {
      {
        let chunk = this.config.chunks[i];
        let chunkDataset = {};
        chunkDataset.data = [];
        chunkDataset.backgroundColor = this.config.colors[i];
        chunkDataset.label = i;
        for (let index in sceneIds) {
          let sceneId = sceneIds[index];
          let lowerCaseSceneId = sceneId[0].toLowerCase() + sceneId.substring(1);
          if (chunk[sceneId]) {
            chunkDataset.data.push(chunk[sceneId][2]);
          } else if (chunk[lowerCaseSceneId]) {
            chunkDataset.data.push(chunk[lowerCaseSceneId][2]);
          } else {
            chunkDataset.data.push(0);
          }
        }
        datasets.push(chunkDataset);
      }
      // {
      //
      //         let chunk = this.config.chunks[i];
      //         let chunkDataset = {};
      //         chunkDataset.data = [];
      //         chunkDataset.borderColor = this.config.colors[i];
      //         chunkDataset.label = "Chunk " + i + " mean";
      //         chunkDataset.type = "line";
      //         chunkDataset.fill = false;
      //         chunkDataset.pointRadius = 0;
      //         let chunkErrorTotal = 0;
      //         let chunkSceneCount = 0;
      //         for (let index in sceneIds){
      //           let sceneId = sceneIds[index];
      //           if (chunk[sceneId]){
      //             chunkErrorTotal += parseFloat(chunk[sceneId][2]);
      //             chunkSceneCount += 1;
      //           }
      //         }
      //         let meanError = chunkErrorTotal / chunkSceneCount;
      //         for (let index in sceneIds){
      //           chunkDataset.data.push(meanError);
      //         }
      //         datasets.push(chunkDataset);
      // }
    }

    var myChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, {
      type: 'bar',
      data: {
        datasets: datasets,
        labels: sceneIds
      },
      options: {
        title: {
          display: true,
          text: 'Scene Error Vs Ground Truth',
          position: 'top'
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'mm'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Scene Id'
            }
          }]
        },
        events: ['click']
      }
    });

    let that = this;
    $(canvas).on("click", function (event) {
      that.onInteraction(myChart.data.datasets);
    });

    $(this.viewContainer).append(canvas);
  }

  configControls() {
    let that = this;

    let view_two_xy = document.createElement("button");
    view_two_xy.innerHTML = "2D View (xy Projection)";
    view_two_xy.addEventListener('click', function () {
      $(".ThreeDeePoseViewer").remove();
      $(that.xyTwoDeePoseViewer.canvas).show();
      $(that.xzTwoDeePoseViewer.canvas).hide();
      $(that.yzTwoDeePoseViewer.canvas).hide();
      that.xyTwoDeePoseViewer.onResize();
    });

    let view_two_xz = document.createElement("button");
    view_two_xz.innerHTML = "2D View (xz Projection)";
    view_two_xz.addEventListener('click', function () {
      $(".ThreeDeePoseViewer").remove();
      $(that.xyTwoDeePoseViewer.canvas).hide();
      $(that.xzTwoDeePoseViewer.canvas).show();
      $(that.yzTwoDeePoseViewer.canvas).hide();
      that.xzTwoDeePoseViewer.onResize();
    });

    let view_two_yz = document.createElement("button");
    view_two_yz.innerHTML = "2D View (yz Projection)";
    view_two_yz.addEventListener('click', function () {
      $(".ThreeDeePoseViewer").remove();
      $(that.xyTwoDeePoseViewer.canvas).hide();
      $(that.xzTwoDeePoseViewer.canvas).hide();
      $(that.yzTwoDeePoseViewer.canvas).show();
      that.yzTwoDeePoseViewer.onResize();
    });

    $(this.controlsContainer).append(view_two_xy);
    $(this.controlsContainer).append(view_two_xz);
    $(this.controlsContainer).append(view_two_yz);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ErrorViewer;


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[125]);
//# sourceMappingURL=compare.bundle.js.map