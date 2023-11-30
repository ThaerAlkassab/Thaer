numSamples = 1000;
numFeatures = 5;
syntheticData = rand(numSamples, numFeatures);
correlationMatrix = rand(numFeatures);
syntheticData = syntheticData * correlationMatrix;
noiseLevel = 0.1;
syntheticData = syntheticData + noiseLevel * randn(size(syntheticData));
% Assuming a binary classification task
labels = randi([0, 1], numSamples, 1);
figure;
scatter3(syntheticData(:, 1), syntheticData(:, 2), syntheticData(:, 3), 20, labels, 'filled');
xlabel('Feature 1');
ylabel('Feature 2');
zlabel('Feature 3');






