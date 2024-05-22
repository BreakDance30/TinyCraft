document.addEventListener('DOMContentLoaded', function () {
    const world = document.querySelector('.world');
    const blockTextures = [
        '/textures/grass.png',
        '/textures/dirt.png',
        '/textures/stone.png',
        '/textures/cobblestone.png',
        '/textures/oak_log.png',
        '/textures/oak_leaves.png',
        '/textures/oak_planks.png',
        '/textures/glass.png',
        '/textures/oak_trapdoor.png',
        '/textures/oak_sapling.png'
    ];
    let currentBlockIndex = 0;

    // Function to create a block
    function createBlock(texture) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundImage = `url(${texture})`;
        return block;
    }

    // Function to create and fill the world with blocks
    function createWorld() {
        for (let i = 0; i < 10; i++) { // Create 10 layers of air above the grass
            const airLayer = document.createElement('div');
            airLayer.classList.add('layer');
            for (let j = 0; j < 256; j++) { // Create 256 blocks per layer of air
                airLayer.appendChild(createBlock('')); // Air texture
            }
            world.appendChild(airLayer);
        }

        // Create layers of grass, dirt, and stone
        for (let i = 0; i < 16; i++) { // Create 16 layers
            const layer = document.createElement('div');
            layer.classList.add('layer');
            for (let j = 0; j < 256; j++) { // Create 256 blocks per layer
                if (i < 2) {
                    layer.appendChild(createBlock('')); // More air texture
                } else if (i === 2 && j >= 4) {
                    layer.appendChild(createBlock(blockTextures[0])); // Grass texture
                } else if (i < 4) {
                    layer.appendChild(createBlock(blockTextures[1])); // Dirt texture
                } else {
                    layer.appendChild(createBlock(blockTextures[2])); // Stone texture
                }
            }
            world.appendChild(layer);
        }
    }

    // Function to handle block click for placing blocks
    function handleBlockClick(event) {
        const block = event.target;
        if (block.classList.contains('block')) {
            block.style.backgroundImage = `url(${blockTextures[currentBlockIndex]})`;
        }
    }


    // Function to switch block texture
    function switchBlock(index) {
        currentBlockIndex = index;
    }

    // Function to create block selector
    function createBlockSelector() {
        const selectorButton = document.createElement('button');
        selectorButton.classList.add('block-selector');
        selectorButton.style.position = 'fixed';
        selectorButton.style.top = '20px';
        selectorButton.style.left = '20px';
        selectorButton.style.width = '50px';
        selectorButton.style.height = '50px';
        selectorButton.style.padding = '0';
        selectorButton.style.border = 'none';
        selectorButton.style.background = 'none';
        selectorButton.addEventListener('click', () => {
            currentBlockIndex = (currentBlockIndex + 1) % blockTextures.length;
            const image = selectorButton.querySelector('img');
            image.src = blockTextures[currentBlockIndex];
        });
        const image = document.createElement('img');
        image.src = blockTextures[currentBlockIndex];
        image.style.width = '100%';
        image.style.height = '100%';
        selectorButton.appendChild(image);
        document.body.appendChild(selectorButton);
    }

    // Call createWorld function to generate the world
    createWorld();

    // Add event listener for block clicking
    world.addEventListener('click', handleBlockClick);

    // Create block selector
    createBlockSelector();
});
