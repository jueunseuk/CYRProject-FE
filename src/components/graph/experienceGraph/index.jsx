import { ResponsiveLine } from '@nivo/line';

const ExperienceGraph = ({data}) => {
    return (
        <ResponsiveLine 
            data={data}
            margin={{ top: 10, right: 20, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            curve="cardinal"
            axisBottom={{ legend: 'transportation', legendOffset: 36 }}
            axisLeft={{ legend: 'count', legendOffset: -40 }}
            lineWidth={1}
            pointSize={1}
            pointColor="black"
            pointBorderWidth={2}
            pointBorderColor="black"
            pointLabelYOffset={-12}
            areaBaselineValue={180}
            areaOpacity={0.75}
            enableTouchCrosshair={true}
            useMesh={true}
        />
    );
};

export default ExperienceGraph;

