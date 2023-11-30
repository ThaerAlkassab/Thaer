function mainGUI()
    % Create the main GUI window
    fig = figure('Name', '5G Millimeter Wave Massive MIMO', 'Position', [100, 100, 800, 600]);

    % Create UI components
    uicontrol('Style', 'text', 'String', 'Number of Antennas:', 'Position', [20, 550, 120, 20]);
    numAntennasEdit = uicontrol('Style', 'edit', 'Position', [150, 550, 50, 20]);

    uicontrol('Style', 'text', 'String', 'Number of Stations:', 'Position', [220, 550, 120, 20]);
    numStationsEdit = uicontrol('Style', 'edit', 'Position', [350, 550, 50, 20]);

    uicontrol('Style', 'pushbutton', 'String', 'Run Simulation', 'Position', [450, 550, 120, 30], 'Callback', @runSimulation);

    % Callback function for the 'Run Simulation' button
    function runSimulation(~, ~)
        % Get user input
        numAntennas = str2double(get(numAntennasEdit, 'String'));
        numStations = str2double(get(numStationsEdit, 'String'));

        % Check for valid input
        if isnan(numAntennas) || isnan(numStations)
            errordlg('Invalid input. Please enter numeric values for antennas and stations.', 'Input Error');
            return;
        end

        % Call your existing main function with user input
        main(numAntennas, numStations);
    end
end
