<template>
  <div>
    <div class="mt-10 space-y-4">
      <!-- Set Temperature -->
      <div>
        <p class="text-red-500 text-lg">Set Max Temperature(&#176;C) <i class="text-black fal fa-thermometer-full"> </i> </p>
        <div class=" border-gray-300 border-2 rounded-lg w-full">
          <input
            type="text"
            placeholder="Set Max Temp"
            class="w-5/6 bg-trasparent outline-none p-2 focus:border-green-500 focus:border-2"
          />
          <button
            class="bg-blue-800 p-3 text-lg text-white rounded-tr-md rounded-br-md w-1/6"
          >
            Set
          </button>
        </div>
      </div>

      <!-- Moisture Level -->
      <div>
        <p class="text-red-500 text-lg">Set Min Moisture Level (%) <i class="ml-2 text-black fal fa-tint"></i> </p>
        <div class=" border-gray-300 border-2 rounded-lg w-full">
          <input
            type="text"
            placeholder="Set Min Moisture Level"
            class="w-5/6 bg-trasparent outline-none p-2 focus:border-green-500 focus:border-2"
          />
          <button
            class="bg-blue-800 text-lg text-white p-3 rounded-tr-md rounded-br-md w-1/6"
          >
            Set
          </button>
        </div>
      </div>

      <!-- Set Light -->
      <div>
        <p class="text-red-500 text-lg">Set Max Intensity (%) <i class="ml-2 text-black fal fa-sun"></i> </p>
        <div class=" border-gray-300 border-2 rounded-lg w-full">
          <input
            type="text"
            placeholder="Set Max Intensity"
            class="w-5/6 bg-trasparent outline-none p-2 focus:border-green-500 focus:border-2"
          />
          <button
            class="bg-blue-800 p-3 text-lg text-white rounded-tr-md rounded-br-md w-1/6"
          >
            Set
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
