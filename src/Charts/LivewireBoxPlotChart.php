<?php

namespace Asantibanez\LivewireCharts\Charts;

use Asantibanez\LivewireCharts\Models\BoxPlotChartModel;
use Livewire\Component;

/**
 * Class LivewireBoxPlotChart
 * @package Asantibanez\LivewireCharts\Charts
 */
class LivewireBoxPlotChart extends Component
{
  public $boxPlotChartModel;

  public function mount(BoxPlotChartModel $boxPlotChartModel){
    $this->boxPlotChartModel = $boxPlotChartModel;
  }

  public function reder()
  {
    return view('livewire-charts::livewire-box-plot-chart');
  }
}