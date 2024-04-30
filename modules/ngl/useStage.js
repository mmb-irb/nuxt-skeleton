import { reactive, onMounted } from 'vue'

let stage = reactive({})
let selection = reactive({})
let NGL

export default function useStage() {

    const getNGLObject = () => {
      const { $NGL } = useNuxtApp()
      NGL = $NGL
    }

    onMounted(() => { 
      getNGLObject()
    })

    const createStage = (layer, tooltip = false) => {
      stage = new NGL.Stage(layer, { tooltip: tooltip })
      return stage 
    }

    const getStage = function () {
      return stage
    }

    const createSelection = function (sel) {
      const s = new NGL.Selection(sel)
      return s 
    }

    const createShape = function () {
      const shape = new NGL.Shape("shape")
      return shape 
    }
  
    return { 
        stage, 
        selection, 
        createStage,
        getStage,
        createSelection,
        createShape
    }
  
  }