import style from './styles/compare.scss';
import { PoseViewer } from '../../shared/modules/pose-viewer.js'
import { ErrorViewer } from '../../shared/modules/error-viewer.js'

const tourName = getParameterByName("tourName");
const versionLeft = getParameterByName("versionLeft");
const versionRight = getParameterByName("versionRight");

function initialize(){
  setupVersionList();
  drawVersionPlots();
}

function setupVersionList(){
  $.post("/getTourVersions", { tourName : tourName }, function(versionList){
    for (var versionIndex in versionList){
      let version = versionList[versionIndex];
      let leftVersionButton = document.createElement("a");
      $(leftVersionButton).attr('role','button').addClass('btn').html(version);
      $(leftVersionButton).attr('href', `/compare?tourName=${tourName}&versionLeft=${version}&versionRight=${versionRight}`)
      if(version === versionLeft){
        $(leftVersionButton).addClass('btn-warning');
        $(leftVersionButton).attr('href', `/visualize?tourName=${tourName}&version=${version}`);
        $(leftVersionButton).attr('target', `_blank`);
      }
      else{
        $(leftVersionButton).addClass('btn-primary');
      }
      $("#leftVersionSelector").append(leftVersionButton);

      let rightVersionButton = document.createElement("a");
      $(rightVersionButton).attr('role','button').addClass('btn').html(version);
      $(rightVersionButton).attr('href', `/compare?tourName=${tourName}&versionLeft=${versionLeft}&versionRight=${version}`)
      if(version === versionRight){
        $(rightVersionButton).addClass('btn-warning');
        $(rightVersionButton).attr('href', `/visualize?tourName=${tourName}&version=${version}`);
        $(rightVersionButton).attr('target', `_blank`);
      }
      else{
        $(rightVersionButton).addClass('btn-primary');
      }
      $("#rightVersionSelector").append(rightVersionButton);
    }
  });
}

// TODO: Clean this up!!!
function drawVersionPlots(){
  $.post("/getTourResults", { tourName : tourName, versions : [versionLeft, versionRight]}, function(results){
    console.log(results);
    let leftVersionContainer = $("#leftVersionContainer");
    let rightVersionContainer = $("#rightVersionContainer");

    let leftResultsData = results[versionLeft];
    let rightResultsData = results[versionRight];

    // console.log(results);
    for(let gtIndex in leftResultsData.gt){

      let gtConfig = {};
      gtConfig.gt = leftResultsData.gt[gtIndex];

      gtConfig.chunks = [];
      gtConfig.colors = [];
      for(let chunkIndex in leftResultsData.chunks){
        let chunk = leftResultsData.chunks[chunkIndex];
        let gt_chunk_scenes = {};
        let gt_chunk_colors = {};
        for (let scene in chunk){
          if(chunk[scene][1] == gtIndex){
            gt_chunk_scenes[scene[0].toLowerCase() + scene.substring(1)] = chunk[scene];
          }
        }

        if (Object.keys(gt_chunk_scenes).length > 2){
          gtConfig.chunks.push(gt_chunk_scenes);
          gtConfig.colors.push(leftResultsData.chunk_colors[chunkIndex]);
        }
      }

      console.log(gtConfig);

      // DRAW Left Poses
      let leftClusterPose = new PoseViewer(gtConfig, leftVersionContainer, 500);

      function onInteraction(event){
        let visibleChunks = [];
        for (var index in event){
          let chunkData = event[index];
          visibleChunks.push(!chunkData._meta[Object.keys(chunkData._meta)[0]].hidden);
        }
        console.log(visibleChunks);
        leftClusterPose.setVisibleChunks(visibleChunks);
      }

      let leftClusterErrors = new ErrorViewer(gtConfig, leftVersionContainer, 500, onInteraction);

    }

    for(let gtIndex in rightResultsData.gt){

      let gtConfig = {};
      gtConfig.gt = rightResultsData.gt[gtIndex];

      gtConfig.chunks = [];
      gtConfig.colors = [];
      for(let chunkIndex in rightResultsData.chunks){
        let chunk = rightResultsData.chunks[chunkIndex];
        let gt_chunk_scenes = {};
        let gt_chunk_colors = {};
        for (let scene in chunk){
          if(chunk[scene][1] == gtIndex){
            gt_chunk_scenes[scene[0].toLowerCase() + scene.substring(1)] = chunk[scene];
          }
        }

        if (Object.keys(gt_chunk_scenes).length > 2){
          gtConfig.chunks.push(gt_chunk_scenes);
          gtConfig.colors.push(rightResultsData.chunk_colors[chunkIndex]);
        }
      }

      // DRAW Left Poses
      let rightClusterPose = new PoseViewer(gtConfig, rightVersionContainer, 500);

      function onInteraction(event){
        let visibleChunks = [];
        console.log(event);
        for (var index in event){
          let chunkData = event[index];
          visibleChunks.push(!chunkData._meta[Object.keys(chunkData._meta)[0]].hidden);
        }
        console.log(visibleChunks);
        rightClusterPose.setVisibleChunks(visibleChunks);
      }

      //let clusterPoses = new PoseViewer()
      let rightClusterErrors = new ErrorViewer(gtConfig, rightVersionContainer, 500, onInteraction);
      // Draw Graph of errors
    }
  })
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

function sfmUpdate(){
  window.location.href = "/chunks/?tourName=" + tourName;
}


initialize();
