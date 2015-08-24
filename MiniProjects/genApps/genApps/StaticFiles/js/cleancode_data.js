function buildTOC(sample,blen){
    var html =''
    html+='<div class="multilist">'
    
    html+='<div class="menu" ><ul id="menu">'
    for (i=0;i<sample.length;i++){
        x = sample[i];
        if( i == 0 )
            html+='<li class="active" onclick="autoDetectToggleSilde(this,\'#pages\')">'+x.chapter+' </li>'
        else
            html+='<li onclick="autoDetectToggleSilde(this,\'#pages\')">'+x.chapter+' </li>'
    }
    html+='</ul></div>'
    
    html+= '<div class="pages" id="pages">'
    for (i=0;i<sample.length;i++){
        x = sample[i];  
        var page_id = 'pid'+i
        if( i == 0 ){ 
            html+='<div class="page active" id="'+page_id+'">'
        }
        else{
            html+='<div class="page" id="'+page_id+'">'
        }
        p = x.problem
        
        html+='<ul class="active">'
        for (j=0;j<p.length;j++){
            html+='<li class="entry "><p class="id">'+(j+1)+'</p><p class="title"> '+p[j].title+'</p><p class="btn1" onclick="'+p[j].id+'"> Solve Now</p></li>'
            if((j+1)%blen == 0){
                html+='</ul><ul>'
            }
        }
        html+='</ul>'
        
        html+='<div class="circle-list">'
        for (j=0;j<Math.ceil(p.length/blen);j++){
            if( j == 0 ){ 
                html+='<a class="active" onclick="autoDetectToggleSilde(this,\'#'+page_id+'\')">&#8226;</a>'
            }
            else{
                html+='<a onclick="autoDetectToggleSilde(this,\'#'+page_id+'\')">&#8226;</a>'
            }            
        }
        html+='</div>'
        
        html+='</div>'
    }
    html+='</div>'

    html+='</div> <!-- end of multilist -->'
    return html;
}

function populate_toc(data){
    $('#tocf').html(buildTOC(data,7));
}


/********** It will store all Static data ************/
sample = [
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'title1',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  }
]

// DataStructure 1.
ds1 = [
  {
    'chapter': 'Introduction',
    'problem': [
      {
        'title': 'Concept of DataStructure',
        'id': 10
      },
      {
        'title': 'Application of DataStructure',
        'id': 10
      },
      {
        'title': 'Clasification of DataStructure',
        'id': 10
      },
      {
        'title': 'Linier DataStructure',
        'id': 10
      },
      {
        'title': 'Non Lenear DataStructure',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'Array',
    'problem': [
      {
        'title': 'Concept of Arry,,',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'Linked List',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'Stack',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'Queue',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'Tree',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'Graph',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  },
  {
    'chapter': 'Hash/Tables',
    'problem': [
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      },
      {
        'title': 'one line description about problem',
        'id': 10
      }
    ]
  }
]
