<template>
	<div style="position:relative">
		<div id="loader-viewer" class="d-flex justify-center align-center" v-if="loading">
			<v-progress-circular
				:width="5"
				:size="80"
				color="red"
				indeterminate
			></v-progress-circular>
		</div>
		<div id="viewport"></div>
		<LegendViewer v-model="legendText" position="tr" v-if="legend" />
	</div>
</template>
  
<script setup>
	
	const config = useRuntimeConfig()

	import useStage from '@/modules/ngl/useStage'
	import mouseObserver from '@/modules/ngl/mouseObserver'

	const { createStage } = useStage()
	const { checkMouseSignals } = mouseObserver()

	const { id } = defineProps(['id'])

	const legend = ref(false)
	const legendText = ref('')

	const loading = ref(true)
	let stage = null
	onMounted(async () => {

		stage = createStage("viewport")
		stage.setParameters({ backgroundColor: '#dedede' });

		const topology = await $fetch(`${config.public.apiBase}/files/${id}`)
		const blob = new Blob([topology], { type: "text/plain" });

		stage.loadFile(blob, { defaultRepresentation: false, ext: 'pdb'})
			.then(async function (component) {
				component.addRepresentation("cartoon", { sele: "*", color: 'sstruc' });
        component.addRepresentation("ball+stick", { sele: "hetero and (not water)", color: 'element' });
				component.autoView('*');

				setTimeout(async () => {
					stage.viewer.handleResize()
					loading.value = false
				}, 50)
			})

		const updateLegend = (v, s) => {
			legendText.value = v
			legend.value = s
		}

		checkMouseSignals(stage, updateLegend)

		window.addEventListener("resize", () => stage.viewer.handleResize())

	})

	const addRepresentation = (sele) => {
		if(!stage.compList[0]) return
		const r = stage.compList[0].addRepresentation( "ball+stick", { sele: sele, radius: .2 })
		stage.compList[0].autoView(sele, 500);
		return r
	}

	defineExpose({
		addRepresentation
	});

</script>

<style scoped>
	#loader-viewer { position: absolute; top: 0; left: 0; background: #dedede; width: 100%; height: 450px; z-index: 1;}
	#viewport { width: 100%; height: 450px; background-color: #dedede; }
</style>
  