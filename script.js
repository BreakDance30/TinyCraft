document.addEventListener('DOMContentLoaded', function () {
    const world = document.querySelector('.world');
    const blockTabs = [
        ['/textures/blocks/grass.png', '/textures/blocks/dirt.png', '/textures/blocks/stone.png', '/textures/blocks/cobblestone.png', '/textures/blocks/wood/oak_log.png', '/textures/blocks/wood/oak_leaves.png', '/textures/blocks/wood/oak_planks.png', '/textures/blocks/obsidian.png', '/textures/blocks/crying_obsidian.png', '/textures/blocks/wood/oak_sapling.png'],
        ['/textures/blocks/grass.png', '/textures/blocks/dirt.png', '/textures/blocks/dirt_path.png', '/textures/blocks/coarse_dirt.png', '/textures/blocks/rooted_dirt.png'],
        ['/textures/blocks/wood/acacia_log.png', '/textures/blocks/wood/acacia_planks.png', '/textures/blocks/wood/acacia_sapling.png'],
        ['/textures/blocks/wood/bamboo_planks.png'],
        ['/textures/blocks/wood/birch_log.png', '/textures/blocks/wood/birch_planks.png', '/textures/blocks/wood/birch_sapling.png'],
        ['/textures/blocks/wood/cherry_log.png', '/textures/blocks/wood/cherry_planks.png', '/textures/blocks/wood/cherry_sapling.png'],
        ['/textures/blocks/wood/crimson_planks.png', '/textures/blocks/wood/warped_planks.png'],
        ['/textures/blocks/wood/dark_oak_log.png', '/textures/blocks/wood/dark_oak_planks.png', '/textures/blocks/wood/dark_oak_sapling.png'],
        ['/textures/blocks/wood/jungle_log.png', '/textures/blocks/wood/jungle_planks.png', '/textures/blocks/wood/jungle_sapling.png'],
        ['/textures/blocks/wood/mangrove_log.png', '/textures/blocks/wood/mangrove_planks.png'],
        ['/textures/blocks/wood/oak_log.png', '/textures/blocks/wood/stripped_oak_log.png', '/textures/blocks/wood/oak_leaves.png', '/textures/blocks/wood/oak_planks.png', '/textures/blocks/wood/oak_trapdoor.png', '/textures/blocks/wood/oak_sapling.png'],
        ['/textures/blocks/wood/spruce_log.png', '/textures/blocks/wood/spruce_planks.png', '/textures/blocks/wood/spruce_sapling.png'],
        ['/textures/blocks/ores/coal_ore.png', '/textures/blocks/ores/copper_ore.png', '/textures/blocks/ores/iron_ore.png', '/textures/blocks/ores/lapis_ore.png', '/textures/blocks/ores/redstone_ore.png', '/textures/blocks/ores/gold_ore.png', '/textures/blocks/ores/diamond_ore.png'],
        ['/textures/blocks/glass/glass.png', '/textures/blocks/glass/black_stained_glass.png', '/textures/blocks/glass/blue_stained_glass.png', '/textures/blocks/glass/brown_stained_glass.png', '/textures/blocks/glass/cyan_stained_glass.png', '/textures/blocks/glass/gray_stained_glass.png', '/textures/blocks/glass/green_stained_glass.png', '/textures/blocks/glass/light_blue_stained_glass.png', '/textures/blocks/glass/light_gray_stained_glass.png'],
        ['/textures/blocks/glass/lime_stained_glass.png', '/textures/blocks/glass/magenta_stained_glass.png', '/textures/blocks/glass/orange_stained_glass.png', '/textures/blocks/glass/pink_stained_glass.png', '/textures/blocks/glass/purple_stained_glass.png', '/textures/blocks/glass/red_stained_glass.png', '/textures/blocks/glass/white_stained_glass.png', '/textures/blocks/glass/yellow_stained_glass.png', '/textures/blocks/glass/tinted_glass.png'],
        ['/textures/blocks/wool/white_wool.png', '/textures/blocks/wool/orange_wool.png', '/textures/blocks/wool/magenta_wool.png', '/textures/blocks/wool/light_blue_wool.png', '/textures/blocks/wool/yellow_wool.png', '/textures/blocks/wool/lime_wool.png', '/textures/blocks/wool/pink_wool.png', '/textures/blocks/wool/gray_wool.png'],
        ['/textures/blocks/wool/light_gray_wool.png', '/textures/blocks/wool/cyan_wool.png', '/textures/blocks/wool/purple_wool.png', '/textures/blocks/wool/blue_wool.png', '/textures/blocks/wool/brown_wool.png', '/textures/blocks/wool/green_wool.png', '/textures/blocks/wool/red_wool.png', '/textures/blocks/wool/black_wool.png'],
        ['/textures/blocks/terracotta/white_terracotta.png', '/textures/blocks/terracotta/orange_terracotta.png', '/textures/blocks/terracotta/magenta_terracotta.png', '/textures/blocks/terracotta/light_blue_terracotta.png', '/textures/blocks/terracotta/yellow_terracotta.png', '/textures/blocks/terracotta/lime_terracotta.png', '/textures/blocks/terracotta/pink_terracotta.png', '/textures/blocks/terracotta/gray_terracotta.png'],
        ['/textures/blocks/terracotta/light_gray_terracotta.png', '/textures/blocks/terracotta/cyan_terracotta.png', '/textures/blocks/terracotta/purple_terracotta.png', '/textures/blocks/terracotta/blue_terracotta.png', '/textures/blocks/terracotta/brown_terracotta.png', '/textures/blocks/terracotta/green_terracotta.png', '/textures/blocks/terracotta/red_terracotta.png', '/textures/blocks/terracotta/black_terracotta.png'],
        ['/textures/blocks/terracotta/white_glazed_terracotta.png', '/textures/blocks/terracotta/orange_glazed_terracotta.png', '/textures/blocks/terracotta/magenta_glazed_terracotta.png', '/textures/blocks/terracotta/light_blue_glazed_terracotta.png', '/textures/blocks/terracotta/yellow_glazed_terracotta.png', '/textures/blocks/terracotta/lime_glazed_terracotta.png', '/textures/blocks/terracotta/pink_glazed_terracotta.png', '/textures/blocks/terracotta/gray_glazed_terracotta.png'],
        ['/textures/blocks/terracotta/light_gray_glazed_terracotta.png', '/textures/blocks/terracotta/cyan_glazed_terracotta.png', '/textures/blocks/terracotta/purple_glazed_terracotta.png', '/textures/blocks/terracotta/blue_glazed_terracotta.png', '/textures/blocks/terracotta/brown_glazed_terracotta.png', '/textures/blocks/terracotta/green_glazed_terracotta.png', '/textures/blocks/terracotta/red_glazed_terracotta.png', '/textures/blocks/terracotta/black_glazed_terracotta.png'],
        ['/textures/blocks/concrete/white_concrete.png', '/textures/blocks/concrete/orange_concrete.png', '/textures/blocks/concrete/magenta_concrete.png', '/textures/blocks/concrete/light_blue_concrete.png', '/textures/blocks/concrete/yellow_concrete.png', '/textures/blocks/concrete/lime_concrete.png', '/textures/blocks/concrete/pink_concrete.png', '/textures/blocks/concrete/gray_concrete.png'],
        ['/textures/blocks/concrete/light_gray_concrete.png', '/textures/blocks/concrete/cyan_concrete.png', '/textures/blocks/concrete/purple_concrete.png', '/textures/blocks/concrete/blue_concrete.png', '/textures/blocks/concrete/brown_concrete.png', '/textures/blocks/concrete/green_concrete.png', '/textures/blocks/concrete/red_concrete.png', '/textures/blocks/concrete/black_concrete.png']
        
    ];

    let currentTabIndex = 0;
    let currentBlockIndex = 0;
    let currentCarpetIndex = 0;

    // Function to create a block
    function createBlock(texture, id) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundImage = `url(${texture})`;
        return block;
    }
    

    // Simple random noise function for cave generation
    function noise(x, y) {
        // Generate a pseudo-random value based on x and y
        return Math.random() * (Math.sin(x * 0.1) + Math.cos(y * 0.1));
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

        // Create layers of grass, dirt, and stone with cave generation
        for (let i = 0; i < 16; i++) { // Create 16 layers
            const layer = document.createElement('div');
            layer.classList.add('layer');
            for (let j = 0; j < 256; j++) { // Create 256 blocks per layer
                if (i < 2) {
                    layer.appendChild(createBlock('')); // More air texture
                } else if (i === 2 && j >= 4) {
                    layer.appendChild(createBlock(blockTabs[currentTabIndex][0])); // Grass texture
                } else if (i < 4) {
                    layer.appendChild(createBlock(blockTabs[currentTabIndex][1])); // Dirt texture
                } else {
                    // Cave generation logic
                    let isCave = noise(i, j) > 0.5; // Adjust the threshold for cave density
                    if (isCave) {
                        layer.appendChild(createBlock('')); // Air texture (cave)
                    } else {
                        layer.appendChild(createBlock(blockTabs[currentTabIndex][2])); // Stone texture
                    }
                }
            }
            world.appendChild(layer);
        }
    }

    // Function to handle block click for placing and destroying blocks
    function handleBlockClick(event) {
        const block = event.target;
        if (block.classList.contains('block')) {
            const currentTexture = block.style.backgroundImage;
            if (currentTexture === '' || currentTexture === 'none' || currentTexture === 'url("")') {
                // Place block if it's an air block
                block.style.backgroundImage = `url(${blockTabs[currentTabIndex][currentBlockIndex]})`;
                console.log('Placing block:', blockTabs[currentTabIndex][currentBlockIndex]);
            } else {
                // Destroy block if it's not an air block
                block.style.backgroundImage = '';
                console.log('Destroying block:', currentTexture);
            }
        }
    }

    // Function to switch block texture
    function switchBlock(index) {
        currentBlockIndex = index;
    }

    // Function to create block buttons for larger screens
    function createBlockButtons() {
        blockTabs[currentTabIndex].forEach((texture, index) => {
            const button = document.createElement('button');
            button.classList.add('block-button');
            button.style.position = 'fixed';
            button.style.top = `${20 + index * 60}px`; // Adjust the vertical position and size
            button.style.left = '20px';
            button.style.width = '50px'; // Adjust the width
            button.style.height = '50px'; // Adjust the height
            button.style.padding = '0'; // Remove padding
            button.style.border = 'none'; // Remove border
            button.style.background = 'none'; // Remove background
            button.addEventListener('click', () => switchBlock(index));
            const image = document.createElement('img');
            image.src = texture;
            image.style.width = '100%'; // Make sure the image fills the button
            image.style.height = '100%'; // Make sure the image fills the button
            button.appendChild(image);
            document.body.appendChild(button);
        });
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
            currentBlockIndex = (currentBlockIndex + 1) % blockTabs[currentTabIndex].length;
            const image = selectorButton.querySelector('img');
            image.src = blockTabs[currentTabIndex][currentBlockIndex];
        });
        const image = document.createElement('img');
        image.src = blockTabs[currentTabIndex][currentBlockIndex];
        image.style.width = '100%';
        image.style.height = '100%';
        selectorButton.appendChild(image);
        document.body.appendChild(selectorButton);
    }

    // Function to create arrow button for changing block tab
    function createArrowButton(direction) {
        const arrowButton = document.createElement('button');
        arrowButton.classList.add('arrow-button');
        arrowButton.style.position = 'fixed';
        arrowButton.style.width = '50px';
        arrowButton.style.height = '50px';
        arrowButton.style.border = 'none';
        arrowButton.style.background = 'none';
        if (direction === 'left') {
            arrowButton.style.top = '20px';
            arrowButton.style.left = '80px'; // Adjust as needed for proper positioning
        } else {
            arrowButton.style.top = '20px';
            arrowButton.style.right = '20px'; // Adjust as needed for proper positioning
        }
        const arrowImage = document.createElement('img');
        arrowImage.src = '/textures/buttons/arrow.png';
        arrowImage.style.width = '100%';
        arrowImage.style.height = '100%';
        arrowButton.appendChild(arrowImage);
        arrowButton.addEventListener('click', () => {
            if (direction === 'left') {
                currentTabIndex = (currentTabIndex + 1 + blockTabs.length) % blockTabs.length;
            } else {
                currentTabIndex = (currentTabIndex + 1) % blockTabs.length;
            }
            document.querySelectorAll('.block-button').forEach(button => button.remove());
            createBlockButtons();
        });
        document.body.appendChild(arrowButton);
    }

    // Call createBlockSelector function to generate block selector for both larger and smaller screens
    createBlockSelector();

    // Call createArrowButton function to generate arrow buttons for both directions
    createArrowButton('left');

    // Call createWorld function to generate the world with caves
    createWorld();

    // Add event listener for block clicking
    world.addEventListener('click', handleBlockClick);

    // Create block buttons for larger screens
    createBlockButtons();

    // Create arrow buttons for changing block selection
    createArrowButton('left');
});
